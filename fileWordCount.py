from collections import defaultdict, OrderedDict

"""
2. File Word Count
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

if __name__ == "__main__":
    fileWordCount("1-0.txt")