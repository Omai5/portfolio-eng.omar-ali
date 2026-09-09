#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;

public:
    Student() {
        name = "Unknown";
        age = 18;
        gpa = 0.0;
    }

    Student(string n, int a, double g) {
        name = n;
        age = a;
        gpa = g;
    }

    void displayInfo() {
        cout << "Student Info:\n";
        cout << "Name : " << name << endl;
        cout << "Age  : " << age << endl;
        cout << "GPA  : " << gpa << endl;
        cout << "------------------------\n";
    }
};

int main() {
    Student student1;
    Student student2("Omar", 20, 3.8);

    student1.displayInfo();
    student2.displayInfo();

    return 0;
}



/*
class Book {
private:
    string title;
    string author;
    int paymentMethod;  

public:
    
    Book() {
        title = "Unknown";
        author = "Anonymous";
        paymentMethod = 0;  
    }

    
    Book(string t, string a) {
        title = t;
        author = a;
        paymentMethod = 0;
    }

    
    void setPayment(int method) {
        paymentMethod = method;
    }

    
    string getPaymentMethodName() {
        switch (paymentMethod) {
            case 1: return "Cash";
            case 2: return "Credit Card";
            case 3: return "PayPal";
            case 4: return "Vodafone Cash";
            default: return "Unknown";
        }
    }

    
    void printInfo() {
        cout << "Title         : " << title << endl;
        cout << "Author        : " << author << endl;
        cout << "Payment Method: " << getPaymentMethodName() << endl;
        cout << "-----------------------------\n";
    }
};

int main() {
    
    Book book1;
    book1.setPayment(1);  

     
    Book book2("Atomic Habits", "James Clear");
    book2.setPayment(2);  

    
    book1.printInfo();
    book2.printInfo();

    return 0;
}







/*
class Rectangle
{
private:
    double length, width;

public:
    Rectangle()
    {
        if (length < 0)
        {
            cout << "length can't be nagative " << endl;
            length = 0;
        }
        if (width < 0)
        {
            cout << "width can't be nagative " << endl;
            width = 0;
        }
    }
    void enter_data()
    {
        cout << "enter length  : " << endl;
        cin >> length;
        cout << "enter width : " << endl;
        cin >> width;
        cout << "tha area :" << area() << endl;
    }
    double area()
    {

        return length * width;
    }
};

int main()
{
    Rectangle re;
    re.enter_data();
}

/*
//! definition (encapsulation)
class car
{
private:
    //?properties
    string brand;
    string model;
    int year;

protected:
    bool is_expired()
    {
        int current_year = 2025;
        return (current_year - year) > 15;
    }

public:
    //! Default constructor
    car()
    {
        brand = "unavailable";
        model = "unavailable";
        year = 1;
    }
    //! constructor
    car(string brand, string model, int year)
    {
        set_brand(brand);
        set_model(model);
        set_year(year);
        car::is_expired();
    }

    //?methods
    virtual void displayinfo()
    {

        cout << "brand : " << get_brand() << endl;
        cout << "model : " << get_model() << endl;
        cout << "yaer : " << get_year() << endl;
        cout << "expired : " << (is_expired() ? "yes" : "no") << endl;
        cout << "===================================" << endl;
    }
    //! setters // getters
    void set_brand(string n)
    {
        n.erase(remove_if(n.begin(), n.end(), ::isdigit), n.end());
        brand = n;
    }
    string get_brand()
    {
        return brand;
    }
    void set_model(string m)
    {
        m.erase(remove_if(m.begin(), m.end(), ::isdigit), m.end());
        model = m;
    }
    string get_model()
    {
        return model;
    }
    void set_year(int y)
    {
        year = y;
    }
    int get_year()
    {
        return year;
    }
    //! destrutor
    ~car()
    {
        //! clear resources
        cout << "clennad resources" << endl;
    }
};

//! inheritance
class electricCar : public car
{
private:
    int battery_capacity;

public:
    electricCar(string brand, string model, int year, int battery_capacity)
    {

        car::set_brand(brand);
        car::set_model(model);
        car::set_year(year);
        set_battery_capacity(battery_capacity);
    }

    void set_battery_capacity(int b)
    {
        battery_capacity = b;
    }
    int get_battery_capacity()
    {

        return battery_capacity;
    }
    //! polymorphism
    void displayinfo() override
    {
        car::displayinfo();
        cout << "battery capacity : " << get_battery_capacity() << endl;
        cout << "=============================" << endl;
    }
};

int main()
{

    car car0("nisn", "sunyy", 2008);
    car car1("mercedes55", "cc89", 2021);
    car car2;

    electricCar ecar1("tesla", "modelX", 2024, 1000);

    car0.displayinfo();
    car1.displayinfo();
    car2.displayinfo();
    ecar1.displayinfo();
    return 0;
}

/*
class calculator
{

private:
    float num1, num2;

public:
    void input_data()
    {
        cout << "enter your first number : " << endl;
        cin >> num1;
        cout << "enter your second numder : " << endl;
        cin >> num2;
    }
    float add()
    {

        return num1 + num2;
    }
    void show_result()
    {

        cout << "the sum is : " << add() << endl;
    }
};

int main()
{

    calculator cu;
    cu.input_data();
    cu.show_result();
}

/*
class User{
 private:

 string name;
public:

void input_name(){

    cout <<"Enter your name: " <<endl;
    getline(cin, name);
}
void display_info(){
    cout << "welcome :" <<name <<endl;
}


};

int main(){

User user;
user.input_name();
user.display_info();

}
/*
class Box
{

    private :
    double length, width, height;

public:
    Box()
    {
        length = width = height = 1.0;
    }
    Box(double side)
    {
        length = width = height = side;
    }
    Box(double l, double w, double h)
    {
        length = l;
        width = w;
        height = h;
    }
    double calculate(){

     return length*width*height;
    }




};

int main()
{

Box box0;
Box box1(3.5);
Box box2(2.0,4.0,5.0);
cout <<"box 0 = " << box0.calculate() <<endl;
cout <<"box 1 = " << box1.calculate() <<endl;
cout <<"box 2 = " << box2.calculate() <<endl;
return 0;
}
*/