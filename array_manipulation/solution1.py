def arrayManipulation(n, queries):
    
    x = [0 for each in range(n)]
    max_x = 0
    for query in queries:
        for i in range(query[0] - 1, query[1]):
            x[i] += query[2]
            max_x = max(max_x, x[i])

    return max_x