var conn = new WebSocket('ws://localhost:8080');

function sendMessage () {
    conn.send(arguments[0]);
}