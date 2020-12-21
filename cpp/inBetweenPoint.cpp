/* For this kata, you are given three points (x1,y1,z1), (x2,y2,z2), and (x3,y3,z3)
that lie on a straight line in 3-dimensional space. 
You have to figure out which point lies in between the other two.
Your function should return 1, 2, or 3 to indicate which point is the in-between one.*/

#include <cmath>
unsigned middle_point(double x1, double y1, double z1,
	double x2, double y2, double z2,
	double x3, double y3, double z3)
{
double distance13 = (x3-x1)*(x3-x1) +(y3-y1)*(y3-y1)+(z3-z1)*(z3-z1);
double distance12 = (x2-x1)*(x2-x1) +(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1);
double distance23= (x3-x2)*(x3-x2) +(y3-y2)*(y3-y2)+(z3-z2)*(z3-z2);

double maxDistance= max(max(distance13,distance12),distance23);
if(maxDistance == distance13)
return 2;
if(maxDistance== distance12)
return 3;
if(maxDistance==distance23)
return 1;
}