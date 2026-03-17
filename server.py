#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os, sys

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"MaLeMa laeuft auf http://0.0.0.0:{PORT}")
HTTPServer(("0.0.0.0", PORT), NoCacheHandler).serve_forever()
