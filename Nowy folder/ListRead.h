#include "ElementListRead.h"
#include <string>

class ListRead {
private:
	ElementListRead* first;
public:
	ListRead();

	void pushback(Read data);

	void addFirst(Read data);

	void show();

	void destroy(int index);

	void loadFile(const string& file);

	ElementListRead* findlast();

	ElementListRead* current;
	ElementListRead* previous;
};