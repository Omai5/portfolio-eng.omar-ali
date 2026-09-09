#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

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
        year = -1;
    }
    //! constructor parameter
    car(string brand, string model, int year)
    {
        set_brand(brand);
        set_model(model);
        set_year(year);
        is_expired();
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
    // pointer of base class
    car *myCar = new car("Toyota", "Corolla", 2008);
    car *myCar0 = new car("BWM", "M2", 2007);
    car *myCar1 = new car("BWM", "M4", 2021);
    car *myElectricCar = new electricCar("Tesla", "Model S", 2022, 100);

    // Polymorphism in action
    cout << "Normal Car Info:\n";
    myCar->displayinfo();
    myCar0->displayinfo();
    myCar1->displayinfo();

    cout << "Electric Car Info:\n";
    myElectricCar->displayinfo();

    // cleanup
    delete myCar;
    delete myElectricCar;

    return 0;
}
