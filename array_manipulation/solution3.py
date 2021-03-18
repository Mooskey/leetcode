def arrayManipulation(n, queries):
    x = [0 for r in range(n)]

    for query in queries:
        x[query[0] - 1] += query[2]
        if query[1] < n:
            x[query[1]] -= query[2]
    
    max_val = 0
    step = 0
    for y in x:
        step += y
        max_val = max(step,max_val)
            
    return max_val