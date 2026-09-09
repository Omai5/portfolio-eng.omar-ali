#include <iostream>
using namespace std;

int main()
{
    cout << "===================array================\n";
    int element = 0;
    int index = 0;
    int found = 0;
    int size = 5;
    int arr[] = {10, 20, 30, 40, 50};
    cout << "the array befor editing : \n ";
    for (int i = 0; i < size; i++)
    {
        cout << " " << "  the array :  " << arr[i] << " ";
        cout << endl;
    }
    cout << "array after editing : \n";
    cout << "enter the element for Sarching : ";
    cin >> element;

    for (int i = 0; i < size; i++)
    {
        if (element == arr[i])
        {
            index = i;
            found = 1;
        }
    }
    if (found == 1)
    {
        cout << "founded : \n";
        cout << "the index : " << index << " the element : " << element << endl;
    }
    else
    {
        cout << "not founded " << endl;
    }

    return 0;
}