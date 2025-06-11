
import java.util.*;
interface Playable{
    void play();
}
class Football implements Playable{
    
    
    public void play()
    {
        System.out.println("Playing football...");
    }
}
class Cricket implements Playable{
     
    public void play()
    {
        System.out.println("Playing Cricket...");
    }
}
class Tennis implements Playable{
     
    public void play()
    {
        System.out.println("Playing Tennis");
    }
}
public class Main
{
	public static void main(String[] args) {
		Football f = new Football();
		f.play();
		Cricket c = new Cricket();
		c.play();
		Tennis t = new Tennis();
		t.play();
	}
}
