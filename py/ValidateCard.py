''' 
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

    Double every other digit, scanning from right to left, starting from the second digit (from the right).

    Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second
	If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
	Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
'''
import numpy as np
def validate(n):
    arr = np.array([int(i) for i in str(n)])
    arr[-2::-2] *=2
    arr[arr>9] -=9
    return np.sum(arr) %10 ==0
