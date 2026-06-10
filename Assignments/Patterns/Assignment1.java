class Assignment1
{
    public static void main(String args[]) {
        System.out.println("---------------------------------------");
        System.out.println("---------------------------------------");
        question1();
        System.out.println("---------------------------------------");
        System.out.println("---------------------------------------");
        question2();
        System.out.println("---------------------------------------");
        System.out.println("---------------------------------------");
        question3();
    }

    public static void question1() {
        // *****
        // *****
        // *****
        // *****
        // *****


        for(int i = 1; i <= 5; i++) {
            for(int j = 1; j <= 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void question2() {
        // *****
        // ****
        // ***
        // **
        // *


        for(int i = 5; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void question3() {
        // 1
        // 1 2
        // 1 2 3
        // 1 2 3 4
        // 1 2 3 4 5


        for(int i = 1; i <= 5; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
