#include <iostream>
#include <string>
#include <vector>
#include <cmath>
using namespace std;

/* =========================================================
   T01) Class & Object Creation
   ---------------------------------------------------------*/
namespace T01
{
    struct Car
    {
        string brand;
        string model;
        int year;
        void display() const
        {
            cout << brand << " " << model << " (" << year << ")\n";
        }
    };
    void demo()
    {
        cout << "T01) Class & Object Creation\n";
        Car c1{"Toyota", "Corolla", 2020};
        Car c2{"Hyundai", "Elantra", 2022};
        c1.display();
        c2.display();
    }
}

/* =========================================================
   T02) Constructor Overloading
   ---------------------------------------------------------*/
namespace T02
{
    struct Rectangle
    {
        double length, width;
        Rectangle() : length(5), width(2) {}
        Rectangle(double L, double W) : length(L), width(W) {}
        double area() const { return length * width; }
    };
    void demo()
    {
        cout << "\nT02) Constructor Overloading\n";
        Rectangle r1;           // uses default 5x2
        Rectangle r2(3.5, 4.0); // custom
        cout << "r1 area = " << r1.area() << "\n";
        cout << "r2 area = " << r2.area() << "\n";
    }
}

/* =========================================================
   T03) Encapsulation (BankAccount)
   ---------------------------------------------------------*/
namespace T03
{
    class BankAccount
    {
    private:
        double balance;

    public:
        BankAccount(double initial = 0) : balance(max(0.0, initial)) {}
        void deposit(double amount)
        {
            if (amount > 0)
                balance += amount;
        }
        bool withdraw(double amount)
        {
            if (amount > 0 && amount <= balance)
            {
                balance -= amount;
                return true;
            }
            return false;
        }
        double getBalance() const { return balance; }
    };
    void demo()
    {
        cout << "\nT03) Encapsulation\n";
        BankAccount acc(100);
        acc.deposit(50);
        cout << "Balance after deposit = " << acc.getBalance() << "\n";
        cout << "Withdraw 120 -> " << (acc.withdraw(120) ? "ok" : "denied") << ", balance = " << acc.getBalance() << "\n";
        cout << "Withdraw 80  -> " << (acc.withdraw(80) ? "ok" : "denied") << ", balance = " << acc.getBalance() << "\n";
    }
}

/* =========================================================
   T04) Getter / Setter Methods (Student)
   ---------------------------------------------------------*/
namespace T04
{
    class Student
    {
    private:
        int grade; // 0..100
    public:
        Student() : grade(0) {}
        int getGrade() const { return grade; }
        bool setGrade(int g)
        {
            if (g >= 0 && g <= 100)
            {
                grade = g;
                return true;
            }
            return false;
        }
    };
    void demo()
    {
        cout << "\nT04) Getter/Setter\n";
        Student s;
        cout << "Set 105 -> " << (s.setGrade(105) ? "ok" : "invalid") << "\n";
        cout << "Set 88  -> " << (s.setGrade(88) ? "ok" : "invalid") << ", grade = " << s.getGrade() << "\n";
    }
}

/* =========================================================
   T05) Static Member (Counter)
   ---------------------------------------------------------*/
namespace T05
{
    class Counter
    {
    public:
        static int count;
        Counter() { ++count; }
    };
    int Counter::count = 0;
    void demo()
    {
        cout << "\nT05) Static Member\n";
        Counter a, b, c; // creates 3 objects
        cout << "Objects created: " << Counter::count << "\n";
    }
}

/* =========================================================
   T06) Single Inheritance (Person -> Employee)
   ---------------------------------------------------------*/
namespace T06
{
    class Person
    {
    protected:
        string name;
        int age;

    public:
        Person(string n, int a) : name(n), age(a) {}
        void introduce() const { cout << "I am " << name << ", " << age << " years old.\n"; }
    };
    class Employee : public Person
    {
        double salary;

    public:
        Employee(string n, int a, double s) : Person(n, a), salary(s) {}
        void show() const
        {
            introduce();
            cout << "Salary: " << salary << "\n";
        }
    };
    void demo()
    {
        cout << "\nT06) Single Inheritance\n";
        Employee e("Omar", 30, 15000);
        e.show();
    }
}

/* =========================================================
   T07) Multiple Inheritance (Teacher & Researcher -> Professor)
   ---------------------------------------------------------*/
namespace T07
{
    class Teacher
    {
    protected:
        string subject;

    public:
        Teacher(string s) : subject(s) {}
    };
    class Researcher
    {
    protected:
        string topic;

    public:
        Researcher(string t) : topic(t) {}
    };
    class Professor : public Teacher, public Researcher
    {
        string name;

    public:
        Professor(string n, string subj, string top) : Teacher(subj), Researcher(top), name(n) {}
        void print() const { cout << name << ", teaches " << subject << ", researches " << topic << "\n"; }
    };
    void demo()
    {
        cout << "\nT07) Multiple Inheritance\n";
        Professor p("Dr. Sara", "OOP", "AI");
        p.print();
    }
}

/* =========================================================
   T08) Hierarchical Inheritance (Shape -> Circle, Square)
   ---------------------------------------------------------*/
namespace T08
{
    class Shape
    {
    public:
        virtual double area() const = 0;
        virtual ~Shape() = default;
    };
    class Circle : public Shape
    {
        double r;

    public:
        Circle(double R) : r(R) {}
        double area() const override { return 3.14159 * r * r; }
    };
    class Square : public Shape
    {
        double s;

    public:
        Square(double S) : s(S) {}
        double area() const override { return s * s; }
    };
    void demo()
    {
        cout << "\nT08) Hierarchical Inheritance\n";
        Circle c(3);
        Square s(4);
        cout << "Circle area = " << c.area() << "\n";
        cout << "Square area = " << s.area() << "\n";
    }
}

/* =========================================================
   T09) Hybrid Inheritance (Diamond Problem solved with virtual)
   ---------------------------------------------------------*/
namespace T09
{
    class A
    {
    public:
        int x;
        A() : x(0) {}
    };
    class B : virtual public A
    {
    };
    class C : virtual public A
    {
    };
    class D : public B, public C
    {
    public:
        void set(int v) { x = v; }
        int get() const { return x; }
    };
    void demo()
    {
        cout << "\nT09) Hybrid Inheritance (Diamond)\n";
        D d;
        d.set(42);
        cout << "x = " << d.get() << "\n"; // only one A
    }
}

/* =========================================================
   T10) Overriding Methods (Animal -> Dog, Cat)
   ---------------------------------------------------------*/
namespace T10
{
    class Animal
    {
    public:
        virtual void sound() const { cout << "Some sound\n"; }
        virtual ~Animal() = default;
    };
    class Dog : public Animal
    {
    public:
        void sound() const override { cout << "Woof!\n"; }
    };
    class Cat : public Animal
    {
    public:
        void sound() const override { cout << "Meow!\n"; }
    };
    void demo()
    {
        cout << "\nT10) Overriding Methods\n";
        Dog d;
        Cat c;
        d.sound();
        c.sound();
    }
}

/* =========================================================
   T11) Compile-Time Polymorphism (Function Overloading)
   ---------------------------------------------------------*/
namespace T11
{
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    void demo()
    {
        cout << "\nT11) Compile-Time Polymorphism\n";
        cout << "add(2,3) = " << add(2, 3) << "\n";
        cout << "add(2.5,3.1) = " << add(2.5, 3.1) << "\n";
    }
}

/* =========================================================
   T12) Run-Time Polymorphism (virtual draw)
   ---------------------------------------------------------*/
namespace T12
{
    class Shape
    {
    public:
        virtual void draw() const { cout << "Draw shape\n"; }
        virtual ~Shape() = default;
    };
    class Circle : public Shape
    {
    public:
        void draw() const override { cout << "Draw circle\n"; }
    };
    class Rectangle : public Shape
    {
    public:
        void draw() const override { cout << "Draw rectangle\n"; }
    };
    void demo()
    {
        cout << "\nT12) Run-Time Polymorphism\n";
        Shape *s1 = new Circle();
        Shape *s2 = new Rectangle();
        s1->draw();
        s2->draw();
        delete s1;
        delete s2;
    }
}

/* =========================================================
   T13) Abstract Class (pure virtual area)
   ---------------------------------------------------------*/
namespace T13
{
    class Shape
    {
    public:
        virtual double area() const = 0;
        virtual ~Shape() = default;
    };
    class Triangle : public Shape
    {
        double b, h;

    public:
        Triangle(double B, double H) : b(B), h(H) {}
        double area() const override { return 0.5 * b * h; }
    };
    class Square : public Shape
    {
        double s;

    public:
        Square(double S) : s(S) {}
        double area() const override { return s * s; }
    };
    void demo()
    {
        cout << "\nT13) Abstract Class\n";
        Triangle t(3, 4);
        Square s(5);
        cout << "Triangle area = " << t.area() << "\n";
        cout << "Square area = " << s.area() << "\n";
    }
}

/* =========================================================
   T14) Friend Function (Box -> volume)
   ---------------------------------------------------------*/
namespace T14
{
    class Box
    {
    private:
        double length, width, height;

    public:
        Box(double L, double W, double H) : length(L), width(W), height(H) {}
        friend double volume(const Box &b);
    };
    double volume(const Box &b) { return b.length * b.width * b.height; }
    void demo()
    {
        cout << "\nT14) Friend Function\n";
        Box b(2, 3, 4);
        cout << "Volume = " << volume(b) << "\n";
    }
}

/* =========================================================
   T15) Friend Class (Engine & Car)
   ---------------------------------------------------------*/
namespace T15
{
    class Engine
    {
    private:
        int horsepower;

    public:
        Engine(int hp) : horsepower(hp) {}
        friend class Car; // Car can access horsepower
    };
    class Car
    {
        string name;
        Engine eng;

    public:
        Car(string n, int hp) : name(n), eng(hp) {}
        void spec() const { cout << name << " engine: " << eng.horsepower << " HP\n"; }
    };
    void demo()
    {
        cout << "\nT15) Friend Class\n";
        Car c("Civic", 158);
        c.spec();
    }
}

/* =========================================================
   T16) Unary Operator Overloading (-)
   ---------------------------------------------------------*/
namespace T16
{
    class Number
    {
        int value;

    public:
        Number(int v = 0) : value(v) {}
        Number operator-() const { return Number(-value); }
        int get() const { return value; }
    };
    void demo()
    {
        cout << "\nT16) Unary Operator Overloading\n";
        Number n(10);
        Number m = -n;
        cout << m.get() << "\n";
    }
}

/* =========================================================
   T17) Binary Operator Overloading (+ for Complex)
   ---------------------------------------------------------*/
namespace T17
{
    class Complex
    {
    public:
        double re, im;
        Complex(double r = 0, double i = 0) : re(r), im(i) {}
        Complex operator+(const Complex &other) const { return Complex(re + other.re, im + other.im); }
        void print() const { cout << re << (im >= 0 ? "+" : "") << im << "i\n"; }
    };
    void demo()
    {
        cout << "\nT17) Binary Operator Overloading\n";
        Complex a(1, 2), b(3, -4);
        Complex c = a + b;
        c.print();
    }
}

/* =========================================================
   T18) Comparison Operator Overloading (< and > for Book by price)
   ---------------------------------------------------------*/
namespace T18
{
    class Book
    {
        string title;
        double price;

    public:
        Book(string t, double p) : title(t), price(p) {}
        bool operator<(const Book &other) const { return price < other.price; }
        bool operator>(const Book &other) const { return price > other.price; }
        void show() const { cout << title << " (" << price << ")\n"; }
    };
    void demo()
    {
        cout << "\nT18) Comparison Operator Overloading\n";
        Book b1("C++", 150), b2("Python", 120);
        b1.show();
        b2.show();
        cout << "b1 > b2? " << (b1 > b2 ? "yes" : "no") << ", b1 < b2? " << (b1 < b2 ? "yes" : "no") << "\n";
    }
}

// ============MAIN: run all demos=============================================