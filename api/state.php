<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

$storageDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'storage';
$stateFile = $storageDir . DIRECTORY_SEPARATOR . 'state.json';

$defaultState = [
    'projects' => [],
    'logs' => []
];

function respond($statusCode, $payload)
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists($stateFile)) {
        respond(200, $defaultState);
    }

    $raw = @file_get_contents($stateFile);
    if ($raw === false) {
        respond(500, ['message' => '无法读取存档文件']);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        respond(500, ['message' => '存档文件格式不正确']);
    }

    $state = [
        'projects' => isset($decoded['projects']) && is_array($decoded['projects']) ? $decoded['projects'] : [],
        'logs' => isset($decoded['logs']) && is_array($decoded['logs']) ? $decoded['logs'] : []
    ];

    respond(200, $state);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $payload = json_decode($input, true);

    if (!is_array($payload)) {
        respond(400, ['message' => '请求体必须为JSON对象']);
    }

    $state = [
        'projects' => isset($payload['projects']) && is_array($payload['projects']) ? $payload['projects'] : [],
        'logs' => isset($payload['logs']) && is_array($payload['logs']) ? $payload['logs'] : []
    ];

    if (!is_dir($storageDir) && !@mkdir($storageDir, 0775, true)) {
        respond(500, ['message' => '无法创建存储目录']);
    }

    $encoded = json_encode($state, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($encoded === false) {
        respond(500, ['message' => '写入前序列化失败']);
    }

    $result = @file_put_contents($stateFile, $encoded, LOCK_EX);
    if ($result === false) {
        respond(500, ['message' => '无法写入存档文件']);
    }

    respond(200, ['success' => true]);
}

header('Allow: GET, POST');
respond(405, ['message' => '不支持的请求方法']);
