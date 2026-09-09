#include <iostream>
using namespace std;

struct Node
{
    int Value;
    Node *Next;
    Node(int v) : Value(v), Next(nullptr) {}
};

class LinkedList
{
private:
    Node *Head;
    Node *Tail;
    Node *Current;
    Node *prev;

public:
    LinkedList() : Head(nullptr), Tail(nullptr), Current(nullptr), prev(nullptr) {}

    void insert_value(int Value)
    {
        Node *Node_1 = new Node(Value);
        if (Head == nullptr)
        {
            Head = Node_1;
            Tail = Node_1;
        }
        else
        {
            Tail->Next = Node_1;
            Tail = Node_1;
        }
    }

    void insert_value_beginning(int Value)
    {
        Node *Node_2 = new Node(Value);
        Node_2->Next = Head;
        Head = Node_2;
        if (Tail == nullptr)
            Tail = Node_2;
    }

    void display_info_insert_beginning_value()
    {
        int nu;
        cout << "Enter value to insert at beginning: ";
        cin >> nu;
        insert_value_beginning(nu);
    }

    void insert_numbers()
    {
        int n, value;
        cout << "How many numbers you want to insert? ";
        cin >> n;
        for (int i = 1; i <= n; i++)
        {
            cout << "Enter number " << i << ": ";
            cin >> value;
            insert_value(value);
        }
    }

    void display()
    {
        if (Head == nullptr)
        {
            cout << "List is empty.\n";
            return;
        }
        Current = Head;
        cout << "Linked List: ";
        while (Current != nullptr)
        {
            cout << Current->Value << " -> ";
            Current = Current->Next;
        }
        cout << "NULL\n";
    }

    void delete_beginning()
    {
        if (Head == nullptr)
        {
            cout << "List is empty\n";
            return;
        }
        Node *first_node = Head;
        Head = Head->Next;
        if (Head == nullptr)
            Tail = nullptr;
        delete first_node;
    }

    void delete_node(int Value)
    {
        if (Head == nullptr)
        {
            cout << "List is empty\n";
            return;
        }

        Current = Head;
        prev = nullptr;

        // لو أول نود هي اللي هتتمسح
        if (Current->Value == Value)
        {
            Head = Current->Next;
            if (Head == nullptr)
                Tail = nullptr;
            delete Current;
            return;
        }

        // ندور على النود
        while (Current != nullptr && Current->Value != Value)
        {
            prev = Current;
            Current = Current->Next;
        }

        if (Current == nullptr)
        {
            cout << "Value not found\n";
            return;
        }

        prev->Next = Current->Next;
        if (Current == Tail)
            Tail = prev;
        delete Current;
    }

    void display_info_delete_node()
    {
        int nu;
        cout << "Enter value to delete: ";
        cin >> nu;
        delete_node(nu);
    }

    void delete_end_node()
    {
        if (Head == nullptr)
        {
            cout << "List is empty\n";
            return;
        }

        if (Head->Next == nullptr)
        {
            delete Head;
            Head = Tail = nullptr;
            return;
        }

        Current = Head;
        while (Current->Next != Tail)
        {
            Current = Current->Next;
        }

        delete Tail;
        Tail = Current;
        Tail->Next = nullptr;
    }
    void menu()
    {
        bool running = true;
        while (running)
        {
            int choice;
            cout << "\nChoose operation:\n";
            cout << "1. Insert values\n";
            cout << "2. Insert at beginning\n";
            cout << "3. Delete beginning\n";
            cout << "4. Delete node by value\n";
            cout << "5. Delete end node\n";
            cout << "6. Display list\n";
            cout << "0. Exit\n";
            cout << "Your choice: ";
            cin >> choice;

            switch (choice)
            {
            case 1:
                insert_numbers();
                break;
            case 2:
                display_info_insert_beginning_value();
                break;
            case 3:
                delete_beginning();
                break;
            case 4:
                display_info_delete_node();
                break;
            case 5:
                delete_end_node();
                break;
            case 6:
                display();
                break;
            case 0:
                running = false;
                break;
            default:
                cout << "Invalid choice!\n";
            }
        }

        cout << "Program ended.\n";
    }

    ~LinkedList()
    {
        Current = Head;
        while (Current != nullptr)
        {
            Node *temp = Current;
            Current = Current->Next;
            delete temp;
        }
    }
};

int main()
{
    cout << "======== The Linked List ===========\n";
    LinkedList li;
    li.menu();
    return 0;
}