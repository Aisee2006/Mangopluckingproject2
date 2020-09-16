class Release{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.release = Constraint.create(options);
        World.add(world, this.release);
    }

    fly(){
        this.release.bodyA=null;
    }

    Launch(bodyA){
        this.release.bodyA=bodyA;
    }

    display(){
       
    }
    
}