package Programing.OOPs;

class MyThread1 implements Runnable {
    public void run(){
        int i = 0;
        while(i < 40) {
            System.out.println("I'm thread 1");
            i++;
        }
    }
}

class MyThread2 implements Runnable {
    public void run(){
        int i = 0;
        while(i < 40) {
            System.out.println("I'm thread 2");
            i++;
        }
    }
}

public class multiThreading_implements {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        Thread x = new Thread(t1);
        MyThread2 t2 = new MyThread2();
        Thread y = new Thread(t2);
        x.start();
        y.start();
    } 
}
