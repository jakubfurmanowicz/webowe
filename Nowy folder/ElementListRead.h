#include "Read.h"

class ElementListRead {
public:
	Read data;
	ElementListRead* next;
	ElementListRead();
	ElementListRead(const Read& r);
};