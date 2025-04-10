#include "ListRead.h"
#include <string>
#include <fstream>

ListRead::ListRead() {
	first = nullptr;
}
void ListRead::pushback(Read data) {
	if (first == nullptr) {
		cout << "\nFIRST\n";
		addFirst(data);
	}
	else {
		cout << "\nNOT FIRST\n";
		ElementListRead* last = findlast();
		last->next = new ElementListRead(data);
	}
}
ElementListRead* ListRead::findlast() {
	ElementListRead* current = first;
	while (current->next != nullptr) {
		current = current->next;
	}
	return current;
}
void ListRead::addFirst(Read data) {
	first = new ElementListRead;
	first->data = data;
}
void ListRead::show() {
	ElementListRead* current = first;
	while (current != nullptr) {
		current->data.show();
		current = current->next;
	}
}
void ListRead::destroy(int index) {
	if (index == 0) {
		ElementListRead* second = first->next;
		delete first;
		first = second;
		return;
	}
	ElementListRead* current;
	current = first;
	int i = 0;
	ElementListRead* previous = first;
	while (current != nullptr) {
		if (i == index) {
			previous->next = current->next;
			delete current;
			return;
		}
		previous = current;
		current = current->next;
		i++;
	}
};
void ListRead::loadFile(const string& file) {
	ifstream plik(file);
	if (!plik.is_open()) {
		cout << "Nie mozna otworzyc pliku: " << file << "\n";
		return;
	}
	string id, seq, qol;
	int licznik = 0;
	while (getline(plik, id) && getline(plik, seq) && getline(plik, qol)) {
		Read nowy(id, seq, qol);
		pushback(nowy);
		licznik++;
	}
	cout << "Wczytano " << licznik << " odczytow z pliku " << file << "\n";
	plik.close();
}
