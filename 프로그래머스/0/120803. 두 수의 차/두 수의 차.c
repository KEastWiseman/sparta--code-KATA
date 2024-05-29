#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    int answer = num1-num2;
    if (answer <= 100000 && answer >= -1000000) return answer;
}