// No.1
// Create a function that takes two numbers as arguments and return their sum
// addition(3,2) -> 5
// addition(-3,-6) -> -9
// addition(7,3) -> 10

// function addition(a,b) {
//     return a + b;
// }

// function addition(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Sorry but you didn't pass two numbers.";
//     }
//     return a + b;
// }

// const addition = (a, b) => a + b;

// function addition(a, b) {
//   return Math.log10(
//     Math.trunc(Math.sqrt(Math.abs(parseInt("-100")))) ** a *
//       Math.cbrt(
//         Math.floor(
//           Math.atan(Math.sin(parseFloat("1")) / Math.cos(Math.random() ** 0)) *
//             Math.min(Math.E, Math.sign(-(10 * 10 ** 0)) * -2) **
//               Math.min(Math.PI, 3) *
//             Math.hypot(3, 4) ** Math.round(10 / 3)
//         )
//       ) **
//         b
//   );
// }


// No.2
// Write a function that takes the base and height of a triangle and return its area.
// triArea(3,2) -> 3
// triArea(7,4) -> 14
// triArea(10,10) -> 50
// The area of a triagnle is:(base * height)/2

// function triArea(base, height) {
// 	area = base * height
// 	return area/2
// }

// https://www.calculator.net/triangle-calculator.html (삼각형)
// 세 변의 길이가 모두 같은 삼각형을 정 삼각형이라고 하고 두변의 길이가 같은 삼각형을 이등변삼각형이라고 합니다.
// 세 변의 길이가 각각 모두 다른 삼각형을 부등변 삼각형이라고 한다.
// 정 삼각형은 세 변의 길이가 같고 세 꼭지점의 각도가 모두 같다.
// 내각에 따른 삼각형를 분류하면 직각 삼각형과 oblique trangle(수직이나 수평이 아닌 기울인 각도로 나뉜다.)
// 직각 삼각형의 가장 긴 변을 빗변이라고 한다.
// 직각 삼각형에서 빗변이 아닌 다른 두 변의 길이를 알면, 피타고라스 정리를 이용하여 빗변의 길이를 구할 수 있다.
// 9.8 x 10 = 14.001
// 두 변의 길이가 자연수일 때(이등변 삼각형) 다른 변의 길이는 항상 소수점이 생긴다. 정삼각형만 세변의 길이가 같다. 그렇다면 사각형의 대각선이 자연수인 경우?
// 빗변의 계산 (https://ko.wikipedia.org/wiki/%EB%B9%97%EB%B3%80)
// 측량학 : https://www.youtube.com/watch?v=9V4it8cX4jQ
// 학부 교과목 유료 강의 (http://www.uniwise.co.kr/uniwiseWeb/lecture/movieLectureList.html?subNo=3&searchCategoryCode=003&searchSubjectCode=1269&SUBJECT_SJT_CD=1269&leftMenuLType=T002&lecKType=D)
// 삼각형은 내각이 90도 이상인 꼭짓점을 두 개 이상 가질 수 없으며 더 이상 삼각형이 아님.
// 삼각형 내각의 합은 항상 180도이다. 즉, 한 내각을 알면 나머지 두 내각을 모두 알 수 있다.



