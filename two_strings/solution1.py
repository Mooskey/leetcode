def twoStrings(s1, s2):
    s1 = set(s1)
    s2 = set(s2)
    
    for l in s1:
        if l in s2:
            return 'YES'
    return 'NO'