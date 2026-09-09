#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two integers: ";
    cin >> a >> b;
    cout << "Sum = " << a + b << endl;
    return 0;
}




// #include <iostream>
// using namespace std;

// int main() {
//     string name;
//     cout << "Enter your name: ";
//     cin >> name;
//     cout << "Hello, " << name << "!" << endl;
//     return 0;
// }








// #include <iostream>
// using namespace std;

// int main() {
//     float x, y;
//     cout << "Enter two floating-point numbers: ";
//     cin >> x >> y;
//     cout << "Product = " << x * y << endl;
//     return 0;
// }






// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     if (n % 2 == 0)
//         cout << "Even" << endl;
//     else
//         cout << "Odd" << endl;
//     return 0;
// }







// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     if (n > 0)
//         cout << "Positive" << endl;
//     else if (n < 0)
//         cout << "Negative" << endl;
//     else
//         cout << "Zero" << endl;
//     return 0;
// }





// #include <iostream>
// using namespace std;

// int main() {
//     int a, b, c;
//     cout << "Enter three numbers: ";
//     cin >> a >> b >> c;
//     int largest = a;
//     if (b > largest) largest = b;
//     if (c > largest) largest = c;
//     cout << "Largest = " << largest << endl;
//     return 0;
// }






// #include <iostream>
// using namespace std;

// int main() {
//     int N;
//     cout << "Enter N: ";
//     cin >> N;
//     for (int i = 1; i <= N; i++) {
//         cout << i << " ";
//     }
//     cout << endl;
//     return 0;
// }








// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     for (int i = 1; i <= 10; i++) {
//         cout << n << " x " << i << " = " << n * i << endl;
//     }
//     return 0;
// }







// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     long long factorial = 1;
//     for (int i = 1; i <= n; i++) {
//         factorial *= i;
//     }
//     cout << "Factorial = " << factorial << endl;
//     return 0;
// }




// #include <iostream>
// using namespace std;

// int main() {
//     double a, b;
//     char op;
//     cout << "Enter two numbers: ";
//     cin >> a >> b;
//     cout << "Enter operator (+, -, *, /): ";
//     cin >> op;

//     switch(op) {
//         case '+': cout << "Result = " << a + b; break;
//         case '-': cout << "Result = " << a - b; break;
//         case '*': cout << "Result = " << a * b; break;
//         case '/':
//             if (b != 0)
//                 cout << "Result = " << a / b;
//             else
//                 cout << "Error: Division by zero";
//             break;
//         default: cout << "Invalid operator";
//     }
//     cout << endl;
//     return 0;
// }




// #include <iostream>
// using namespace std;

// int main() {
//     for (int i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0)
//             cout << "FizzBuzz" << endl;
//         else if (i % 3 == 0)
//             cout << "Fizz" << endl;
//         else if (i % 5 == 0)
//             cout << "Buzz" << endl;
//         else
//             cout << i << endl;
//     }
//     return 0;
// }





// #include <iostream>
// using namespace std;

// bool isPrime(int n) {
//     if (n <= 1) return false;
//     for (int i = 2; i * i <= n; i++) {
//         if (n % i == 0)
//             return false;
//     }
//     return true;
// }
// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     if (isPrime(n))
//         cout << n << " is a Prime number." << endl;
//     else
//         cout << n << " is NOT a Prime number." << endl;
//     return 0;
// }