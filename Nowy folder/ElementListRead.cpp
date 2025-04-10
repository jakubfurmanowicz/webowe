#include "ElementListRead.h"

ElementListRead::ElementListRead() : data(), next(nullptr) {}

ElementListRead::ElementListRead(const Read& r) : data(r), next(nullptr) {}