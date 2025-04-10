#include "Read.h"

int Read::licznik = 0;

void Read::setId(string i) {
    id = i;
}
void Read::setSeq(string s) {
    seq = s;
}
void Read::setQol(string qol) {
    quality = qol;
}
void Read::showLicznik() {
    cout << "Aktualna liczba obiektow: " << licznik << "\n";
}
string Read::getId() {
    return id;
}
string Read::getSeq() {
    return seq;
}
string Read::getQol() {
    return quality;
}
void Read::show() {
    cout << "ID: " << id << "\n";
    cout << "Sequence: " << seq << "\n";
    cout << "Quality: " << quality << "\n";
}
Read::Read() {
    licznik++;
    cout << "To jest konstruktor bezargumentowy.\n";
}
Read::Read(string i, string s) {
    id = i;
    seq = s;
    licznik++;
    cout << "Id " << id << " jest przypisane do seq " << seq << " (konstruktor dwuargumentowy).\n";
}
Read::Read(string i, string s, string qol){
    id = i;
    seq = s;
    quality = qol;
    licznik++;
    cout << "Id " << id << " jest przypisane do seq " << seq << " o quality " << quality << " (konstruktor wieloargumentowy).\n";
}
Read::Read(const Read& inne){
    id = inne.id;
    seq = inne.seq;
    quality = inne.quality;
    licznik++;
    cout << "Skopiowano dane (konstruktor kopiujacy)\n";
}
Read::~Read() {
    licznik--;
    cout << "\nDESTRUKCJA OBIEKTU.";
}