#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
#include <cctype>
#include <cmath>
using namespace std;

int main()
{
    cout << "\n=================================\n";
    cout << pow(2, 4) << endl;     // 16
    cout << 2 * 2 * 2 * 2 << endl; // 16

    // cout << 11.5 % 2 <<endl;      // error
    cout << fmod(11.5, 2) << endl; // 1.5

    cout << ceil(9.1) << endl; // 10

    cout << floor(9.9) << endl; // 9

    cout << round(9.9) << endl;  // 10
    cout << round(9.5) << endl;  // 10
    cout << round(9.4) << endl;  // 9
    cout << round(9.49) << endl; // 9

    cout << trunc(9.9) << endl; // 9
    cout << trunc(9.5) << endl; // 9
    cout << trunc(9.1) << endl; // 9
    cout << "\n==============================\n";
    cout << "A\n";                      // A
    cout << tolower('A') << endl;       // 97 -> ASCII Value
    cout << char(tolower('A')) << endl; // a
    cout << char(97) << endl;           // a

    cout << "b\n";                      // b
    cout << toupper('b') << endl;       // 66 -> ASCII Value
    cout << char(toupper('b')) << endl; // a
    cout << char(66) << endl;           // a

    cout << "\n==========================\n";
    string name = "oMaR";
    int nameOneSize = 4;
    for (int i = 0; i < nameOneSize; i++)
    {
        if (isupper(name[i]))
        {
            cout << char(tolower(name[i]));
        }
        else
        {
            cout << char(toupper(name[i]));
        }
        // cout << name[i] << "\n";
    }
    cout << "\n============================\n";
    string names = "o\n m  a \n r";
    int nameTwoSize = names.size();
    for (int i = 0; i < nameTwoSize; i++)
    {
        if (isspace(names[i]))
        {
            continue;
        }
        cout << names[i];
    }
    cout << "\n=================================================================\n";
    cout << min(10, -20) << "\n";                       // -20
    cout << min(10, 20) << "\n";                        // 10
    cout << min('a', 'c') << "\n";                      // a
    cout << min('a', 'C') << "\n";                      // C
    cout << int('a') << "\n";                           // 97
    cout << int('C') << "\n";                           // 67
    cout << min({10, -20, 30, -100, 100, -50}) << "\n"; // -100
    cout << "=======================\n";
    cout << max(10, -20) << "\n";                       // 10
    cout << max(10, 20) << "\n";                        // 20
    cout << max('a', 'c') << "\n";                      // c
    cout << max('a', 'C') << "\n";                      // a
    cout << int('a') << "\n";                           // 97
    cout << int('C') << "\n";                           // 67
    cout << max({10, -20, 30, -100, 100, -50}) << "\n"; // 100
    cout << "=======================\n";

    int nums[] = {10, -20, 30, -100, 100, -50};
    int numsSize = size(nums);
    int checkMinNum = 0;

    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] < checkMinNum)
        {
            checkMinNum = nums[i];
        }
    }

    cout << checkMinNum << "\n";

    cout << "=======================\n";

    int numsTwo[] = {10, 20, 10, 10, 13, 15, 100, 20, 10};
    int numsTwoSize = size(numsTwo);
    int counter = 0;
    int choosenNum = 10;

    for (int i = 0; i < numsTwoSize; i++)
    {
        if (numsTwo[i] == choosenNum)
        {
            counter++;
        }
    }

    cout << choosenNum << " Found " << counter << " Times";

    return 0;
}