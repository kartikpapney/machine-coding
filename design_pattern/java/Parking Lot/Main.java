import java.util.*;

enum VehicleSize {
    SMALL,
    MEDIUM,
    LARGE
}

abstract class Vehicle {
    private int id;
    private VehicleSize size;
    protected void setSize(VehicleSize size) {
        this.size = size;
    }
    protected void setId(int id) {
        this.id = id;
    }
    public VehicleSize getSize() {
        return this.size;
    }
}

class Truck extends Vehicle {
    Truck(int id) {
        this.setId(id);
        this.setSize(VehicleSize.LARGE);
    }
}

class ParkingSpot {
    private VehicleSize size;
    private int id;
    private boolean available;
    private Vehicle parkedVehicle;

    public ParkingSpot(int id, VehicleSize size) {
        this.id = id;
        this.size = size;
        this.available = true;
        this.parkedVehicle = null;
    }
    public int getId() {
        return this.id;
    }
    public boolean isAvailable() {
        return this.available;
    }
    public boolean park(Vehicle vehicle) {
        if(!this.available) return false;
        this.available = false;
        this.parkedVehicle = vehicle;
        return true;
    }
    public boolean unpark() {
        if(this.available) return false;
        this.available = true;
        this.parkedVehicle = null;
        return true;
    }
    public VehicleSize getSize() {
        return this.size;
    }
    public Vehicle getParkedVehicle() {
        return this.parkedVehicle;
    }
}

class ParkingFloor {
    private int id;
    private Map<Integer, ParkingSpot> spots;

    public ParkingFloor(int id) {
        this.id = id;
        this.spots = new HashMap<>();
    }

    public int getFloorId() {
        return this.id;
    }

    public List<ParkingSpot> availableSpots() {
        List<ParkingSpot> result = new ArrayList<>();
        for(ParkingSpot spot : spots.values()) {
            if(spot.isAvailable()) {
                result.add(spot);
            }
        }
        return result;
    }

    public void addParkingSpot(ParkingSpot spot) {
        spots.put(spot.getId(), spot);
    }
}

interface ParkingStrategy {
    ParkingSpot findSpot(ParkingFloor floor, Vehicle vehicle);
}

class SameSizeParkingStrategy implements ParkingStrategy {
    @Override
    public ParkingSpot findSpot(ParkingFloor floor, Vehicle vehicle) {
        for(ParkingSpot spot : floor.availableSpots()) {
            if(spot.getSize() == vehicle.getSize()) {
                return spot;
            }
        }
        return null;
    }
}

class ParkingTicket {
    private int id;
    private Vehicle vehicle;
    private ParkingSpot spot;
    private int entryTimeStamp;
    private int exitTimestamp;

    public ParkingTicket(int id, Vehicle vehicle, ParkingSpot spot, int entryTimeStamp) {
        this.id = id;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTimeStamp = entryTimeStamp;
        this.exitTimestamp = -1;
    }

    public void exit(int exitTimestamp) {
        this.exitTimestamp = exitTimestamp;
    }

    public int getEntryTimeStamp() {
        return this.entryTimeStamp;
    }

    public int getExitTimestamp() {
        return this.exitTimestamp;
    }
}

interface ParkingFeeStrategy {
    double calculateFee(ParkingTicket ticket);
}

class FlatRateParkingFeeStrategy implements ParkingFeeStrategy {
    private double ratePerHour;

    public FlatRateParkingFeeStrategy(double ratePerHour) {
        this.ratePerHour = ratePerHour;
    }

    @Override
    public double calculateFee(ParkingTicket ticket) {
        int duration = ticket.getExitTimestamp() - ticket.getEntryTimeStamp();
        return (duration / 3600000.0) * ratePerHour;
    }
}

class ParkingLot {
    private List<ParkingFloor> floors;
    private ParkingStrategy parkingStrategy;
    private ParkingFeeStrategy parkingFeeStrategy;
    private static ParkingLot instance;

    private ParkingLot(
        ParkingStrategy parkingStrategy,
        ParkingFeeStrategy parkingFeeStrategy
    ) {
        this.floors = new ArrayList<>();
        this.parkingStrategy = parkingStrategy;
        this.parkingFeeStrategy = parkingFeeStrategy;
    }

    public static ParkingLot getInstance() {
        if(instance == null) {
            instance = new ParkingLot(
                new SameSizeParkingStrategy(),
                new FlatRateParkingFeeStrategy(10.0)
            );
        }
        return instance;
    }

    public void addFloor(ParkingFloor floor) {
        this.floors.add(floor);
    }

    public ParkingTicket park(Vehicle vehicle) {
        for(ParkingFloor floor : floors) {
            ParkingSpot spot = parkingStrategy.findSpot(floor, vehicle);
            if(spot != null) {
                spot.park(vehicle);
                ParkingTicket ticket = new ParkingTicket(
                    new Random().nextInt(1000),
                    vehicle,
                    spot,
                    (int)System.currentTimeMillis()
                );
                return ticket;
            }
        }
        return null;
    }

    public double unpark(ParkingTicket ticket) {
        ticket.exit((int)System.currentTimeMillis());
        return parkingFeeStrategy.calculateFee(ticket);
    }
}

public class Main {
    public static void main(String[] args) {
        
        ParkingLot lot = ParkingLot.getInstance();

        ParkingSpot spot1 = new ParkingSpot(1, VehicleSize.LARGE);
        ParkingSpot spot2 = new ParkingSpot(2, VehicleSize.MEDIUM);
        ParkingFloor floor1 = new ParkingFloor(1);
        floor1.addParkingSpot(spot1);
        floor1.addParkingSpot(spot2);
        lot.addFloor(floor1);

        Truck truck = new Truck(1);
        ParkingTicket ticket = lot.park(truck);
        try {
            // Pause the execution for 2000 milliseconds (2 seconds)
            Thread.sleep(2000); 
        } catch (InterruptedException e) {
            // Handle the case where the sleep is interrupted
            Thread.currentThread().interrupt(); // Re-interrupt the thread
            System.err.println("The thread was interrupted while sleeping.");
        }
        double fee = lot.unpark(ticket);
        System.out.println("Parking fee for truck: " + fee);
    }
}