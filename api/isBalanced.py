from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse,parse_qs
import json

"""
3. Balance Parenthesis  api/isBalanced/?string=
"""

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        query = urlparse(self.path).query
        response = {}
        mainString = parse_qs(query).get("string")
        if mainString:
            string = mainString[0]
            isBalanced = self.isParenthesisBalanced(string)
            response["data"] = {"string": string, "isBalanced": isBalanced}
            response["error"] = None
        else:
            response["data"] = None
            response["error"] = "No string provided. Please provide a string by adding a query to the url. i.e api/isBalanced/?string=(())"
        self.wfile.write(bytes(json.dumps(response, ensure_ascii=False), 'utf-8'))
        return

    def isParenthesisBalanced(self, string):
        bracketArr = ["(", ")", "{", "}", "[", "]"]
        allBrackets = set(bracketArr)
        bracketPairs = { bracketArr[i] : bracketArr[i+1] for i in range(0, len(bracketArr)-1,2)}

        # stack implementation using a list
        openBrackets = []

        for char in string:
            if char in allBrackets:
                if char in bracketPairs:
                    openBrackets.append(char)
                else:
                    if len(openBrackets)==0:
                        return False
                    lastOpenBracket = openBrackets.pop()
                    expectedBracket = bracketPairs[lastOpenBracket]
                    if char != expectedBracket:
                        return False

        # assuming that a string with no brackets is balanced
        return len(openBrackets) == 0



