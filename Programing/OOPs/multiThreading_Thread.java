package Programing.OOPs;

class MyThread1 extends Thread {
    public void run(){
        int i = 0;
        while(i < 40) {
            System.out.println("I'm thread 1");
            i++;
        }
    }
}

class MyThread2 extends Thread {
    public void run(){
        int i = 0;
        while(i < 40) {
            System.out.println("I'm thread 2");
            i++;
        }
    }
}
public class multiThreading_Thread {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        MyThread2 t2 = new MyThread2();
        t1.start();
        t2.start();
    }
}
