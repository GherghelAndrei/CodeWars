#Insertion Sort

def insertionSort(alist):
    for index in range(1, len(alist)):

        currentvalue = alist[index]
        position = index

        while position > 0 and alist[position-1] >currentvalue:
            alist[position] = alist[position - 1]
            position -=1

        alist[position] = currentvalue
alist = [54,26,93,17,77,31,44,55,20]
insertionSort(alist)
print(alist)
print("*"*40)
#The Shell sort

def shellSort(alist):
    sublistcount = len(alist) //2
    while sublistcount > 0:
        for startposition in range(sublistcount):
            gapInsertionSort(alist, startposition,sublistcount)
        print("After increments of size", sublistcount, "The list is", alist)
        sublistcount = sublistcount // 2


def gapInsertionSort(alist,start,gap):
    for i in range(start+gap, len(alist), gap):

        currentvalue = alist[i]
        position = i

        while position >= gap and alist[position-gap]>currentvalue:
            alist[position] = alist[position-gap]
            position = position-gap
        alist[position] = currentvalue

blist = [54,26,93,17,77,31,44,55,20]
shellSort(blist)
print(blist)