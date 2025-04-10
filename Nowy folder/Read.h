#pragma once
#include <string>
#include <iostream>
using namespace std;


class Read {
private:
    string id;
    string seq;
    string quality;
    static int licznik;
public:
    static void showLicznik();

    void setId(string i);
    void setSeq(string s);
    void setQol(string qol);

    string getId();
    string getSeq();
    string getQol();

    void show();

    Read();
    Read(string id, string seq);
    Read(string id, string seq, string quality);
    Read(const Read& inne);
    ~Read();
};