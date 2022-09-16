import heapq
L = []

for i in reversed(range(0, 10)):
    heapq.heappush(L, i)

for i in range(10):
    print(heapq.heappop(L))
print(L)