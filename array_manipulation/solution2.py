def arrayManipulation(n, queries):
    x = [0 for r in range(n)]
    
    for i in range(n):
        for query in queries:
            if i in range(query[0]-1,query[1]):
                x[i] += query[2]
                
    return max(x)