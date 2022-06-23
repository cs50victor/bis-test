# BIS-Test

live result (front-end + server/api) is viewable on

- [bis-test.vercel.app](https://bis-test.vercel.app)

## Front-end Question/Task

- on the landing page of the website listed above

## Back-end Question/Task

For this section, I tried making an API endpoint for each question.

1. Golang Fibonacci

- file location: api/fib.go
- endpoint: `https://bis-test.vercel.app/api/fib/?num=`
- example: `curl https://bis-test.vercel.app/api/fib/?num=10`

    ```go
    func fibonacci(n int) []int {
    sequence := []int{}
    var n1, n2 int = 0, 1
    var n3 int

    for i := 1; i <= n; i++ {
        sequence = append(sequence, n1)
        n3 = n1 + n2
        n1 = n2
        n2 = n3
    }
    return sequence
    }
    ```

2. Word Count

- file location: fileWordCount.py

    ```py
    from collections import defaultdict, OrderedDict

    """
    1. File Word Count
    """

    def fileWordCount(fileName):
        uniqueWords = defaultdict(int)
    
    # only the current line in the file is read into memory
    # previous lines are garbage collected

    with open(fileName) as file:
        for line in file:
            allWords = line.split(" ")
            for word in allWords:
                text = word.lower().strip()
                if text.isascii():
                    uniqueWords[text] += 1

    print(
        f"Number of uniquewords - {len(uniqueWords)}.\nFormat: word - number of occurences in file."
    )

    sortedUniqueWords = OrderedDict(sorted(uniqueWords.items(), key=lambda item: item[1], reverse=True))

    for word, occurences in sortedUniqueWords.items():
        print(f"{word}".ljust(20) + f"- {occurences}")

    return sortedUniqueWords
    ```

3. Balanced Parenthesis

- file location: api/isBalanced.py
- endpoint: `https://bis-test.vercel.app/api/isBalanced/?string=`
- example: `curl https://bis-test.vercel.app/api/isBalanced/?string=(())`

    ```py
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
    ```
