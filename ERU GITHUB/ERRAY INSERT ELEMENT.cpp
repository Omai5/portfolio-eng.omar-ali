#include <iostream>
using namespace std;

int main()
{
    cout << "===================array================\n";
    int element = 0;
    int index = 0;
    int size = 5;
    int arr[] = {10, 20, 30, 40, 50};
    cout << "the array befor editing : \n ";
    for (int i = 0; i < size; i++)
    {
        cout << " " << "  the array :  " << arr[i] << " ";
        cout << endl;
    }
    cout << "array after editing : \n";
    cout << "enter the element : ";
    cin >> element;
    cout << "enter the index : ";
    cin >> index;
    if (index <= size)
    {
        for (int i = size; i < index; i--)
        {
            arr[i] = arr[i - 1];
        }
        arr[index] = element;
        size++;
    }
    else
    {
        cout << "your index is invalid : ";
    }
    cout << "array after adding : \n";
    for (int i = 0; i < size; i++)
    {
        cout << " " << "  the array :  " << arr[i] << " ";
    }

    return 0;
}