#include <vector>
#include <iostream>

using std::cout;
using std::endl;

struct PeakData {
  std::vector<int> pos, peaks;
};

PeakData pickPeaks(std::vector<int> v) {
  PeakData result;
  if(!v.size()) return result;
  for(int pos = 1; pos < v.size()-1; pos++){
    if(v[pos] > v[pos-1]){
      if (v[pos] > v[pos+1]){
        result.pos.push_back(pos);
        result.peaks.push_back(v[pos]);
      }
      else if(v[pos] == v[pos+1]){
        int extra = pos;
        while(extra < v.size()-1){
          if(v[extra] == v[extra+1]){
            extra++;
          }
          else if(v[extra] > v [extra+1]){
            result.pos.push_back(pos);
            result.peaks.push_back(v[pos]); 
            break;
          } 
          else break;
        }
      }
    } 
  }
  return result;
}

void imprimir(PeakData result){
    for(int i : result.pos){
        cout << "pos: " << i << endl;
    }
    for(int i : result.peaks){
        cout << " peaks: " << i << endl;
    }
}

int main(){
    //PeakData result = pickPeaks(std::vector<int> {3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3});
    //PeakData result2 = pickPeaks(std::vector<int> {1, 2, 2, 2, 1});
    PeakData result3 = pickPeaks(std::vector<int> {1, 2, 2, 2, 3});
    //imprimir(result);
    //imprimir(result2);
    imprimir(result3);
    return 1;
}