
## Introduction
An algorithm is a finite sequence of well-defined instructions to solve a specific problem. Here, the sorting algorithm, as its name indicate, is an algorithm intending to solve the problem of sorting. In the problem of sorting, given a sequence of any random-ordered numbers, our goal is to sort all the numbers either increasingly or decreasingly.To be precise, the sorting algorithm is not a single algorithm. They are actually a family of algorithms that has many variants, meaning we can sort the number sequence in many different ways. Today we'll learn the 2 most popular sorting algorithm:Bubble sort and merge sort. In this learning task, our goal is to sort the sequence by increasing order.


## Bubble Sort
In bubble sort, the computer checks each adjacent pair from left to right. 
If in a pairthe left is smaller (or equal) than the right, which means it's already in increasing order, as shown in green color(4&3)  , the computer does nothing. 
On the other hand, if in a pair, the left is greater than the right (shown as red pair), it swaps the pair (3&5), so the bigger one can be moved to the right. The same appls to the rest of the pairs.

After checking each pair from the beginning to the end, it's not hard to see that the biggest number in this sequence will be shuffled to the rightmost position, just like a bubble pops up to the surface from the bottom of water. 

The procedure that traverses the sequence from left-to right: we call this an iteration. 
Now if we repeat this iteration the 2nd time, the 2nd biggest number will be moved to the 2nd right-most position. Therefore, to sort all the numbers, let's say if we have N numbers to sort, we'll just need to repeat this iteration N times.


# Merge Sort
The merge sort algorithm is very different from bubble sort, as it employs the idea of divide-and-conquer in computer science. 
The algorithm goes like this. Our goal is to sort a whole sequence of numbers. But instead directly sorting them, we divide the sequence into 2 parts, and ask each part to sort itself. 
And how do we sort each part? 
For the left half, again, we divide them into 2 parts, and ask each part to sort itself until each part becomes a single element that can't be further divided. 
If we have 2 parts(5&3) already sorted, we do the merge. Merging 2 already sorted sequence is straight-forward.  We put the 2 sorted sequence (5&3) either on the top and or on the bottom, and Whichever is smaller can go to the merged sequence first, then the bigger one will follow. After the two divided part was merged, we will do the same for the rest (4; 5&3). 

For the right half, again, we divide them into 2 parts, and ask each part to sort itself until each part becomes a single element that can't be further divided. 

In this way, every divided part can be sorted. We'll keep merging them until the whole sequence is sorted.