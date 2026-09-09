#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <array>
#include <algorithm>
using namespace std;

class StackUsingAraay
{
private:
    static const int SIZE = 5;
    float Stack[SIZE];
    int Top;

public:
    StackUsingAraay()
    {
        Top = -1;
    }
    //ensert value 
    void push(float Value)
    {
        if (Top == SIZE - 1)
        {
            cout << " stack is overflow " << endl;
        }
        else
        {
            Top++;
            Stack[Top] = Value;
        }
    }
    //delete value 
    void pop()
    {
        if(Top == -1)
        {
            cout <<"stack is empty  " <<endl;
        }
        else
        {
            cout<< " The pop -> " << Stack[Top]<<endl;
            Top--;
        }
    }
    //last ensert value 
    void peek()
    {
        if(Top == -1)
        {
            cout <<"stack is empty  " <<endl;
        }
        else 
        {
            cout << "\nThe Peek -> " << Stack[Top];
            cout<<endl;
        }
    }
    void Display()
    {
        if(Top == -1)
        {
            cout <<"stack is empty  " <<endl;
        }
        else 
        {
            cout << "=====Stack====== \n";
            for (int i = Top;i>=0;i--)
            {
                cout << "The Value -> " <<Stack[i]<<endl;
            }
            cout << "======NULL=======\n";
        }
    }
};

int main()
{
    StackUsingAraay S1;
    S1.push(10.1);
    S1.push(20.2);
    S1.push(30.3);
    S1.push(40.4);
    S1.push(50.5);
    S1.Display();
    S1.pop();
    S1.Display();
    S1.peek();
    S1.Display();
    return 0;
}