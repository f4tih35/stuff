#include <iostream>
#include <fstream>
using namespace std;
int main(int argc, char* argv[])
{
	string result = argv[1];
	ofstream write(result);
	for(int i = 0;i<argc-2;i++){
		string satir;
		ifstream read(argv[i+2]);
		while(!read.eof()){
				getline(read,satir);	
				write << satir << endl;	
		}	
		read.close();	
	}
	write.close();
}
