import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Services from "../Image/pexels-photo-3294248.jpeg";
import Adoption from "../Image/pexels-photo-982865.jpeg";
import discover from "../Image/events.jpg";
import locataion from "../Image/pexels-snapwire-38867.jpeg";
import lost from "../Image/lost.jpg";
import service from "../Image/pexels-photo-5256142.jpeg";
import play from "../Image/pexels-bin-ziegler-1364729.jpg";
//import blog from "../Image/pexels-snapwire-38867.jpg";
import Schedule from "../Image/pexels-photo-5731866.jpeg";
//import Donation from "../Image/dotane.jpg";

const DetailsPage = () => {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "white" }}>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={play} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Pet Match Playmate</h1>
              <p className="dtParr">
                Are you searching for the right companion for your pet? If yes,
                we can help you find a perfect playmate partner for your pet. We
                make the entire process easy so that pet owners don’t need to
                make numerous searches for their pet’s requirements. Our portal
                provides you a social platform where you can easily get in touch
                with various pet owners around you, along with their pets.
              </p>
              <ul>
                <li>
                  The service provides the most reliable and fastest way to find
                  an ideal playmate for your pet.
                </li>
                <li>
                  You just need to create your pet’s profile along with some of
                  his/her best shots to find the best possible match.
                </li>
                <li>
                  You can go through various pet profiles available at our app
                  and select your favorite.
                </li>
                <li>
                  After selecting a match, you can start conversation with the
                  owner of that pet and if everything goes well, set a date for
                  your pet.
                </li>
              </ul>
              {/* <h4>Our Process</h4> */}
              {/* <p>After registering and creating your pet’s profile, you’ll be shown a listing of the pet profiles within your designated area. This can be set to a specific distance, so you don’t have to travel too far to set up a play date. Zoonders allows for private, in-app chats to protect your privacy and personal contact information from other pet owners. This gives you complete safety to organize meetups, events, and much more with complete safety!</p> */}

              <h4>How does it work?</h4>
              <p>
                You just need to register yourself by creating an account on a
                click. Also, create a profile of your pet, and you can start
                chatting with the owners of your potential pet Playmates. You
                can also organize play dates, meet- ups, events, and more.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Pet Schedule</h1>
              <p className="dtParr">
                Now setting up routines and schedules for your furry buddies has
                become much easier with our pet schedule feature.
              </p>
              <ul>
                <li>Simple and easy to use</li>
                <li>
                  You can create and save a number of useful information about
                  your pets.
                </li>
                <li>
                  By setting schedules for your pets, you will never miss or
                  forget essential cares for your furry buddies.
                </li>
                <li>
                  Using this service, you can easily keep track of all the
                  important dates like vet visits, vaccination, spa appointment,
                  and more.
                </li>
                <li>
                  You can stay up-to-date on your pet’s wellness using our Pet
                  Schedule service
                </li>
              </ul>
              <h4>How does it Works?</h4>
              <p>
                The Pet Schedule service is a great option to schedule and get
                reminders for various activities related to pets. You just need
                to feed the dates for various activities and set timer as per
                your choice and you will automatically get a reminder regarding
                the particular activity that needs to be performed.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={Schedule} alt="" />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            borderTop: "1px solid grey",
            paddingTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Col md={3}>
            <div>
              <img className="img-fluid" src={Adoption} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Pet Adoption</h1>
              <p className="dtParr">
                Whether you want to adopt a pet or need to place your pet for
                adoption, Zoonders is a perfect medium where people who want to
                adopt a pet can easily connect with people who need to rehome
                their pets or just click on link in our app to connect to
                Petfinders.com and your near Animal Shelters. <br />
                You can directly interact with various pet owners who are
                looking for adopters of their pets
              </p>
              <ul>
                <li>
                  Adopters can learn about pets directly from the owners who
                  know them best
                </li>
                <li>
                  Our service makes pet adoption process more secure and stress
                  free
                </li>
                <li>
                  In case of rehoming a pet, there is less chance of illness or
                  death as pets go directly from one loving owner to another
                </li>
                <li>
                  As well we are affiliated with Petfinders.com and local Pet
                  shelters
                </li>
              </ul>
              <h4>How does it work?</h4>
              <p>
                You just create your pet’s profile for adoption, review
                applications, chat or meet with adopters and finalize the
                adoption.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={locataion} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">
                Fill Your Map with Pet-Friendly Locations!
              </h1>
              <p className="dtParr">
                You’d be surprised at how pet friendly a lot of cities are these
                days. With the growing trend of bringing your four-legged
                friends on outdoor adventures, many establishments have done
                away with antiquated “No Pets” policies. However, it is
                important to confirm beforehand so that you don’t waste the
                effort of getting your pet ready for travel. Possible places to
                visit include grocery stores, department stores, salons,
                restaurants, and even entertainment stations. <br />
                Zoonders lets you search up places near you and learn about
                their pet policies and amenities!
              </p>
              <h4>Never Get Thrown Out Again</h4>
              <p>
                Little is worse than going out of your way to drive to a café
                with your pet and learning that your little friend isn’t allowed
                in. Save yourself the trouble (and a bit of time) by using our
                built-in map service to filter out all the places that won’t
                accommodate your pet.
              </p>
              <h4>Learning and Growing Map Details</h4>
              <p>
                We strive to have a 100 percent accurate map to make your life
                as easy as possible. To this end, our map service can be added
                to or updated by all Zoonders users. If a location has recently
                amended their pet policies, then the map listing can be quickly
                changed.
              </p>
              <h4>Safety First – For your Pet and Others</h4>
              <p>
                Bringing your pet to public places requires a certain amount of
                trust. If your pet has known behavioral problems or isn’t fully
                vaccinated, then it may pose a danger to others. If pet-related
                incidents occur, then businesses may choose to stop catering to
                pets of all kinds.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Discover Pet-Friendly Events Near You!</h1>
              <p className="dtParr">
                We’ve all gone through it, leaving our homes with our pet’s sad
                eyes boring into our backs. Especially when we know how much
                they love the great outdoors. While many events aren’t
                well-suited to pets, there are plenty out there that keep animal
                safety in mind. However, finding them all can be a bit of a
                chore, so Zoonders has compiled a list of pet-friendly events in
                your area!
              </p>
              <ul>
                <li>Quickly find fun events you can enjoy with your pet</li>
                <li>
                  Location based so you aren’t shown locations outside of
                  driving distance
                </li>
                <li>
                  Create a group to travel and attend events with through our
                  built-in chat
                </li>
                <li>Easily filter for events that match what you enjoy</li>
              </ul>

              <h4>How it Works</h4>
              <p>
                All you have to do is input your area or have the app
                automatically pinpoint your location. This will generate a list
                of possible events in your area that is either pet-themed or
                safe for pets. You can also filter out this list quickly with
                our search bar in case you were looking to attend a specific
                type of occasion. Depending on where you live, you may need to
                zoom out or increase the search radius to find suitable events.
              </p>

              <h4>Host Events in your Area</h4>
              <p>
                If you can’t find any suitable events in your area, then feel
                free to organize your own! Our platform is geared towards social
                interaction between pet owners and is the perfect conduit to
                making new friends for both you and your pet. Group play dates,
                new food tastings, and dog training events are just a few of the
                fun activities you can put together!
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={discover} alt="" />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            borderTop: "1px solid grey",
            paddingTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Col md={3}>
            <div>
              <img className="img-fluid" src={lost} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">LOST AND FOUND ALERTS!</h1>
              <p className="dtParr">
                Zoonders focuses on creating a tight-knight community of pet
                owners in your area. Something that any owner can understand, is
                the fear and stress of losing their pet. Within our platform,
                you can create lost or found reports so that any pet can quickly
                be returned to their loving homes.
              </p>
              <h4>Included Information</h4>
              <p>
                Our lost and found alerts include all the information already in
                your pet profile. Meaning your pets breed, gender, color, age,
                and photo will be available to the entire community. This goes a
                long way to allowing other users to recognize your pet and take
                action. Your contact information will also be shown so that
                whoever finds your pet will know exactly how to contact you.
              </p>
              {/* <h4>Zoonders Code Dog ID Tag for Pets</h4>
                            <p>For a one-time fee, Zoonders will send you a barcode ID tag for your pet. This can attach directly to a collar and works as a link to your pet’s profile on the Zoonders application. Other users can quickly friend or save your dog’s profile for future meetups or events. <br />
                                This tag can save your pet’s life and return them to you much faster. Even if other users have not seen your posting in “Lost and Found” they will know to contact you based on your pet’s ID tag.</p>
                            <h4>Other Steps</h4>
                            <p> Despite how effective our lost and found system is, you’ll want to do everything you can to locate your pet as soon as possible. A few extra steps that will maximize your chances of finding Fido are:</p>
                            <ul>
                                <li>Join your neighborhood group on social media platforms and post there</li>
                                <li>Call and visit your local animal or stray shelter</li>
                                <li>Drive to areas you frequently visit with your pet, they may walk there on their own</li>
                                <li>Keep someone home at all times in case your pet returns</li>
                            </ul> */}
            </div>
          </Col>
        </Row>
        <Row
          style={{
            borderTop: "1px solid grey",
            paddingTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Zoonder Services</h1>
              <p>Some of the amenities you can find on Zoonders are:</p>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Video Trainers :</span>{" "}
                  Learn the best methods to train your pet. We have expert-made
                  videos concerning both obedience and trick training.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Pet Walks :</span> For
                  the busy pet owner, giving your pet a proper walk every day
                  can be a bit too much. Break up your pet’s daily boredom with
                  a scheduled walk even when you aren’t home.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Boarding/Sitting Services :
                  </span>{" "}
                  You can quickly find a trusted person to watch your pet while
                  you go on vacation or extended trip. This can be set up at
                  your home or theirs, and you’ll know that your pet is in good
                  hands with your local community.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Live Video Veterinarians :
                  </span>{" "}
                  Sometimes emergencies don’t allow you the time to drive to the
                  vet. Also, most vet clinics aren’t open 24/7. Gain access to
                  live video veterinarians so that you can have your pet’s
                  health concerns addressed at any time.
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={Services} alt="" />
            </div>
          </Col>
        </Row>

        <Row
          style={{
            borderTop: "1px solid grey",
            paddingTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Zoonders Marketplace</h1>
              <p>
                Finding quality products you can trust for your pet requires a
                suitable amount of in-depth research. Zoonders has affiliated
                with a collection of reputable stores to show you the best
                options available. All of the products on Zoonders Marketplace
                have been thoroughly vetted for both health and effectiveness.
                They are the greatest tools available for training, fun, and a
                generally fantastic lifestyle!
              </p>
              <h4>
                A few of the special deals and goods you can find on Zoonders
                Marketplace are:
              </h4>
              <ol>
                <li>
                  <span style={{ fontWeight: "bold" }}>Pet Gear :</span>{" "}
                  Leashes, collars, training tools, bowls, etc…
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Treats and Toys</span>
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Pet Food for Different Breeds and Species
                  </span>{" "}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Grooming and General Care Equipment
                  </span>{" "}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Vitamins and Pill Supplements
                  </span>{" "}
                </li>
                <p>And much more!</p>
              </ol>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={Services} alt="" />
            </div>
          </Col>
        </Row>

        <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={service} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Our story</h1>
              <h4>The Zoonders story started from a simple need.</h4>
              <p>
                To provide a better, more improved relationship between pet
                owners and their pets. <br />
                Though many pet owners exist, the many challenges that pet
                owners face when trying to feed, medicate, and groom their pets
                can make pet ownership tiring. As pets, they also need to
                socialize and build a community too.
                <br />
                All these challenges and then some can make pet lovers and
                enthusiasts reconsider adopting a furry buddy. <br />
                Zoonders is a one-stop-all online pet platform (or a pet app, if
                you wish) for anything and everything you need for your beloved
                pets, from excellent grooming and medical service with the top
                pet groomers and veterinarians to a wonderful community of pet
                owners to help you and your pet build a fantastic society. We
                are a team of pet owners and veterinarians with love for pets
                and understand the immeasurable value of companionship that your
                pets provide.
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
          <Col md={3}>
            <div>
              <img className="img-fluid" src={service} alt="" />
            </div>
          </Col>
          <Col md={9}>
            <div className="headCol">
              <h1 className="mb-3">Why Use our Services</h1>
              <p className="dtParr">
                Think of Zoonders as the Facebook of the pet world. It is a free
                social network platform designed to connect local pet owners
                into a community. Pet profiles can include photos, videos, and
                other information about each pet and even allows users to video
                call or chat with one another. Zoonders offers pet news for an
                extensive library of useful information. Not to mention, the app
                works on a global scale, and exists anywhere that a strong pet
                community can form. <br />
                We also consolidate all your pet’s needs into one marketplace,
                so you don’t need to open up dozens of tabs to get everything
                your pet requires. Such as food, preventative care, brushes, and
                many other things. Our vendors are connected with pet stores and
                provide products that have been vetted by veterinarians for
                safety. <br />
                Zoonders is committed to helping the increasing number of stray
                animals around the world. Our pet adoption services connect
                would-be pet owners with those looking to rehome their pet. This
                gives animals the smoothest transition from one loving home to
                the next. <br />
                So, if you’re an owner looking to spice up your pet’s life with
                new activities, friends, toys, and challenges, then Zoonders is
                the app for you!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsPage;

// {/* <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
//                     <Col md={9}>
//                         <div className="headCol">
//                             <h1 className="mb-3">Pet Blog / News</h1>
//                             <p className="dtParr">
//                                 No matter how long you’ve had your pet, it’s always helpful to learn something new. Zoonders features a multi-topic blog that provides news, tips, and upcoming events on a biweekly basis. We’ll help you stay up to date with all the information you need to provide optimum care and a happy life for your furry friend.
//                             </p>

//                             <h4>Travel Guides</h4>
//                             <p>For anyone looking to explore new areas with their little companions, our blog is an irreplaceable resource. No matter where you go, we cover the best places to stop by and get a great experience with your pet. From pet friendly cafes to all-inclusive beaches, we’ll help you plan out your perfect trip!</p>

//                             <h4>Dashing Dogs and Fetching Felines</h4>
//                             <p>Nothing soothes a hard day than a collection of the cutest pets on the internet (besides yours, of course.) Our blog puts a spotlight on the latest trends surrounding people’s pets to give you a few ideas for fun paired activities. Whether it’s spooky Halloween traditions or family portraits, you’ll have an endless supply of inspiration.</p>

//                             <h4>Health and Wellness</h4>
//                             <p>Treating an elderly or sick pet is miles different from caring for another human. With the number of ‘home treatments’ you find on the internet, it can be hard to figure out what is legit. Our blog includes articles related to grooming and health to help pet owners understand what is safe or unsafe for their best friend.</p>
//                         </div>
//                     </Col>
//                     <Col md={3}>
//                         <div>
//                             <img className="img-fluid" src={blog} alt="" />
//                         </div>
//                     </Col>
//                 </Row> */}

// {/* <Row style={{ borderTop: "1px solid grey", paddingTop: "25px", marginBottom: "25px" }}>
//                     <Col md={9}>
//                         <div className="headCol">
//                             <h1 className="mb-3">Donation</h1>
//                             <p className="dtParr">
//                                 With the help of our users, Zoonders has joined to fight to end the suffering of animals across the globe. Puppy mills, premature euthanization, and intolerable living conditions are just a few of the problems we seek to fix. <br />
//                                 By creating communities in every area, we are able to directly connect your funds with your local animal shelters. You’ll know exactly where your donations are going, and they’ll even help raise the overall quality of the neighborhoods you live in. Nobody likes to see stray or sick animals in their area. Most of these institutions are heavily underfunded and understaffed leading to a decreased quality of life for the animals in their care. <br />
//                                 Apart from the local level, we are looking to alleviate some of the big problems for animals in Pakistan by starting our own animal shelter there. Each year, roughly 50,000 dogs alone are killed in Pakistan, a number that can be heavily reduced through compassionate donations. <br />
//                                 A bucket is filled with 10,000 drops. Even small donations will come together to bring about real change in the world.
//                             </p>
//                         </div>
//                     </Col>
//                     <Col md={3}>
//                         <div>
//                             <img className="img-fluid" src={Donation} alt="" />
//                         </div>
//                     </Col>
//                 </Row> */}
