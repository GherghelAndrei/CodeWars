/* You have to build a pyramid.

This pyramid should be built from characters from a given string.

Pyramid from the side:

  c
 bbb
aaaaa

Pyramid from above:

aaaaa
abbba
abcba
abbba
aaaaa

*/

#include <iostream>
using namespace std;
string watchPyramidFromTheSide(string characters)
{
    if(characters == "") return "";
    int n = characters.length();
    string res = "";
    for(int i=0;i<n;i++){
      res = string(i, ' ') + string((n - i) * 2 - 1, characters[i]) + string(i, ' ') + '\n' + res ;
    }
    res.pop_back();
    return res;
}

string watchPyramidFromAbove(string characters)
{
    if(characters == "") return "";
    int n = characters.length();
    vector<vector<char>> square(n*2-1);
    for(auto &x: square) x = vector<char>(n*2-1);
    for(int i = 0;i<n;i++){
      for(int j=0+i;j<2*n-i-1;j++){
        for(int k=0+i;k<2*n-i-1;k++){
          square[j][k] = characters[i];
        }
      }
    }
    string res = "";
    for(auto str: square){
      res += string(str.begin(), str.end()) + '\n';
    }
    res.pop_back();
    return res;
}

int countVisibleCharactersOfThePyramid(std::string characters)
{
    int n = characters.length();
    return n == 0 ? -1 : 4*n*(n-1)+1;
}

int countAllCharactersOfThePyramid(std::string characters)
{
    int n = characters.length();
    int k = n-1;
    return n == 0 ? -1 : (2*k*k*k+3*k*k+k)/6*4+(k+1)*k/2*4+n;
}
