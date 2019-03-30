#include <iostream>
#include <string>
#include <cmath>
using namespace std;
bool is_turing_equation(string s)
{
	int a, b, c;
	int step = 0;
	int curr;
	for (int i = s.size() - 1; i >= 0; i--)
	{
		bool firstRead = true;

		while (i >= 0 && s[i] >= '0' && s[i] <= '9')
		{
			if (firstRead)
			{
				curr = s[i] - '0';
				firstRead = false;
			}
			else curr = curr * 10 + s[i] - '0';
			i--;
		}
		if (step == 0) { c = curr; step++; }
		else if (step == 1) { b = curr; step++; }
		else a = curr;
	}
	return a + b == c;
}

int main()
{
	bool cev = is_turing_equation("0001000+000200=00030");
	cout << cev;
	system("pause");
	return 0;
}