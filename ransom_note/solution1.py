def hashSentence(sentence):
    x = {}
    for letter in sentence:
        if x.get(letter):
            x[letter] += 1
        else:
            x[letter] = 1
    return x

def checkMagazine(magazine, note):
    bank = hashSentence(magazine)
    for letter in note:
        if bool(bank.get(letter)):
            bank[letter] -= 1
        else:
            print('No')
            return
    print('Yes')