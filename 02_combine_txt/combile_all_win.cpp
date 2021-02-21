#include <iostream>
#include <fstream>
#include <dirent.h>
#include <windows.h>

using namespace std;

int main(void)
{
    DIR *d;
    char *p1,*p2;
    int ret;
    struct dirent *dir;
    d = opendir(".");
    system("mkdir result");
    ofstream write("result\\result.txt");
    if (d)
    {
        while ((dir = readdir(d)) != NULL)
        {
            p1=strtok(dir->d_name,".");
            p2=strtok(NULL,".");
            if(p2!=NULL)
            {
                ret=strcmp(p2,"txt");
                if(ret==0)
                {
                    string ilk = p1;
                    string son = ".txt";
                    string birles = ilk + son;
                    cout << birles << endl;
                    string satir;
					ifstream read(birles);
					while(!read.eof())
					{
						getline(read,satir);	
						write << satir << endl;	
					}	
					read.close();
                }
            }

        }
        write.close();
        closedir(d);
    }
    return(0);
}
