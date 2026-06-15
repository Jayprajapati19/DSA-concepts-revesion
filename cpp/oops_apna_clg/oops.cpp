#include <iostream>
#include <string>
using namespace std;



class Teacher{
public:
    string name;
    string dept;
    string subject;
    double salary;


    void changeDept(string newDept) {
        dept = newDept;
    }

};

int  main() {

    Teacher t1;
    t1.name  = "Jayy";
    t1.subject = "Maths";
    t1.dept = "Science";
    t1.salary = 50000;

    cout << "Name: " << t1.name << endl; 

    return 0;

}