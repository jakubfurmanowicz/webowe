// WLN009.cpp : Ten plik zawiera funkcję „main”. W nim rozpoczyna się i kończy wykonywanie programu.
// Uwaga: Nie czytać tego! Co ty robisz!? Przestań!

#include <iostream>
#include "Read.h"
#include "ListRead.h"

int main() {
    Read::showLicznik();
    {
        Read uno;
        Read::showLicznik();
        Read dos("0", "mtt");
        Read tres("1", "vip", "10");
        Read kopia(tres);
        kopia.show();
        Read::showLicznik();

        ListRead list;
        list.pushback(tres);
        list.pushback(dos);
        list.pushback(tres);

        list.destroy(2);

        list.show();

        ListRead plik;
        plik.loadFile("plik.txt");
        plik.show();
    }
    cout << "\n";
    Read::showLicznik();

    return 0;
}