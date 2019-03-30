#include <iostream>
#include <string>
using namespace std;
static int stringCounter(string inputS, char charS) {
	int k = 0;
	for (int i = 0; i < inputS.length(); i++)
	{
		if (inputS[i] == charS)
			k++;
	}
	return k;

}
int main()
{
	cout << stringCounter("Hello world", 'o');
	system("pause");
	return 0;
}