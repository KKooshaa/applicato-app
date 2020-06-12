<template>
  <div id="HomePage">
    <app-header/>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <section class="scroll1Home" id="1">
      <div class="content">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div id="ApplicatoTextHome"> اپلیکاتو </div>
        <div id="MainTextHome"> راهی آسان برای انتخاب دانشگاه </div>
        <div id="FirstScrollDotsHome">
          <a href="#1"> <span class="dotHome firstDotHome"></span> </a>
          <a href="#2"> <span class="dotHome"></span> </a>
          <a href="#3"> <span class="dotHome"></span> </a>
          <a href="#4"> <span class="dotHome"></span> </a>
        </div>
        <v-text-field class="firstTextFieldHome" prepend-inner-icon="search" dense outlined rounded solo flat placeholder="جستجوی دانشگاه یا کشور"> </v-text-field>
      </div>
    </section>
    <section class="scroll2Home" id="2">
      <div class="content">
        <div class="alignHome2">
          <v-card color="#C3C3C3" id="Card2Home" class="resHome" :elevation="3">
            <v-card-title>
              رتبه بر اساس رشته
            </v-card-title>
            <div class="overFlowHome">
              <v-overflow-btn
                background-color= "#1E2126"
                item-color= "#0793FF"
                dense
                flat
                dark
                label="انتخاب رشته"
                :items="dropdown_edit"
                item-value="text"
              ></v-overflow-btn> </div>
            <hr class="hr2Home">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroupHome">
              <!-- <v-chip v-for="(m,index) in major" :key="m.name" color="#7550A6" class="chip2Home">
                <div class="chipButton2Home">
                  <div class="numberCircleHome"> {{index + 1}} </div>
                    {{ m.name }}
                </div>
              </v-chip> -->
              <span  v-for="(m,index) in major" :key="m.name" class="secondRowHome21"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ m.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreText2Home"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
          <v-card color="#C3C3C3" id="Card2Home" class="resHome" :elevation="3">
            <v-card-title>
              رتبه بر اساس شاخه‌ی تحصیلی
            </v-card-title>
            <div class="overFlowHome">
              <v-overflow-btn
                background-color= "#1E2126"
                item-color= "#0793FF"
                dense
                flat
                dark
                label="   انتخاب شاخه‌ی تحصیلی "
                :items="dropdown_edit"
                item-value="text"
              ></v-overflow-btn> </div>
            <hr class="hr2Home">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroupHome"
            >
              <!-- <v-chip v-for="(m,index) in major" :key="m.name" color="#0C4B7E" class="chip2Home">
                <div class="chipButton2Home">
                    <div class="numberCircleHome"> {{index + 1}} </div>
                    {{ m.name }}
                </div>
              </v-chip> -->
              <span  v-for="(m,index) in major" :key="m.name" class="secondRowHome22"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ m.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreText2Home"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
          <v-card color="#C3C3C3" id="Card2Home3" :elevation="3">
            <v-card-title>
              رتبه‌ی کلی دانشگاه‌ها
            </v-card-title>
            <hr class="hr23Home">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroup2Home"
            >
              <!-- <v-chip v-for="(r,index) in rank" :key="r.name" color="#EA6932" class="chip2Home">
                <div class="chipButton2Home">
                    <div class="numberCircleHome"> {{index + 1}} </div>
                    {{ r.name }}
                </div>
              </v-chip> -->
              <span  v-for="(r,index) in rank" :key="r.name" class="secondRowHome23"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ r.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreText3Home"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
        </div>
        <div class="leftSideOfPage leftSide2">
          <div id="UniversityTextHome"> دانشگاه </div>
          <div id="SecondScrollDotsHome">
            <a href="#1"> <span class="dotHome"></span> </a>
            <a href="#2"> <span class="dotHome secondDotHome"></span> </a>
            <a href="#3"> <span class="dotHome"></span> </a>
            <a href="#4"> <span class="dotHome"></span> </a>
          </div>
        </div>
        <v-text-field class="secondTextFieldHome" prepend-inner-icon="search" dense outlined rounded solo flat placeholder="جستجوی دانشگاه یا کشور"> </v-text-field>
      </div>
    </section>
    <section class="scroll3Home" id="3">
      <div class="content">
        <div class="alignHome">
          <v-card color="#C3C3C3" id="CardHome1" :elevation="3">
            <v-card-title>
              رتبه بر اساس رفاه اجتماعی
            </v-card-title>
            <hr class="hrHome">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroup3Home"
            >
              <!-- <v-chip v-for="(w,index) in welfare" :key="w.name" color="#0C4B7E" class="chipHome">
                <div class="chipButtonHome">
                    <div class="numberCircleHome"> {{index + 1}} </div>
                    {{ w.name }}
                </div>
              </v-chip> -->
              <span  v-for="(w,index) in welfare" :key="w.name" class="secondRowHome31"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ w.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreTextHome"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
          <v-card color="#C3C3C3" id="CardHome" :elevation="3">
            <v-card-title>
              رتبه بر اساس سطح دانشگاه‌های کشور
            </v-card-title>
            <hr class="hrHome">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroup3Home"
            >
              <!-- <v-chip v-for="(u,index) in universities" :key="u.name" color="#EA6932" class="chipHome">
                <div class="chipButtonHome">
                  <div class="numberCircleHome"> {{index + 1}} </div>
                  {{ u.name }}
                </div>
              </v-chip> -->
              <span  v-for="(u,index) in universities" :key="u.name" class="secondRowHome32"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ u.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreTextHome"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
          <v-card color="#C3C3C3" id="CardHome12" class="res2Home" :elevation="3">
            <v-card-title>
              رتبه بر اساس پایین بودن هزینه‌ی زندگی
            </v-card-title>
            <hr class="hrHome">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroup3Home"
            >
              <!-- <v-chip v-for="(c,index) in cost" :key="c.name" color="#E61D2F" class="chipHome">
                <div class="chipButtonHome">
                  <div class="numberCircleHome"> {{index + 1}} </div>
                  {{ c.name }}
                </div>
              </v-chip> -->
              <span  v-for="(c,index) in cost" :key="c.name" class="secondRowHome33"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ c.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreTextHome"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
          <v-card color="#C3C3C3" id="CardHome2" class="res2Home" :elevation="3">
            <v-card-title>
              رتبه بر اساس آلودگی هوای کشور
            </v-card-title>
            <hr class="hrHome">
            <v-chip-group
              column
              active-class="primary--text"
              id="ChipGroup3Home"
            >
              <!-- <v-chip v-for="(c,index) in contamination" :key="c.name" color="#7550A6" class="chipHome">
                <div class="chipButtonHome">
                  <div class="numberCircleHome"> {{index + 1}} </div>
                  {{ c.name }}
                </div>
              </v-chip> -->
              <span v-for="(c,index) in contamination" :key="c.name" class="secondRowHome34"> <div class="numberCircleHome"> {{index + 1}} </div> <div id="RankHome"> {{ c.name }} </div> </span>
              <v-btn dense dark color="black" rounded id="MoreTextHome"> ادامه </v-btn>
            </v-chip-group>
          </v-card>
        </div>
        <div class="leftSideOfPage leftSide3">
          <div id="CountryTextHome"> کشور </div>
          <div id="ThirdScrollDotsHome">
            <a href="#1"> <span class="dotHome"></span> </a>
            <a href="#2"> <span class="dotHome"></span> </a>
            <a href="#3"> <span class="dotHome thirdDotHome"></span> </a>
            <a href="#4"> <span class="dotHome"></span> </a>
          </div>
        </div>
        <v-text-field class="thirdTextFieldHome" prepend-inner-icon="search" dense outlined rounded solo flat placeholder="جستجوی دانشگاه یا کشور"> </v-text-field>
      </div>
    </section>
    <section class="scroll4Home" id="4">
      <div v-if="loggedIn">
        <div class="content">
          <component v-bind:is = "comp"> </component>

          <div class="alignHome4">
            <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

            <div class="card-container-Home" id="EachCardHome">
              <div class="card-horizontal-Home">
                <div class="card-front-Home">
                  <v-card class="card-front-content-Home" max-width="420" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <v-img class="white--text align-end" height="220px" src="https://jpninfo.com/wp-content/uploads/2017/11/Tokyo-University.jpg">
                      <div id="StarRatingHome">
                        <v-rating
                          dense
                          color="#F4BC1C"
                          background-color="#F4BC1C"
                          v-model="rating"
                          small
                        ></v-rating>
                      </div>
                      <div id="DegreeHome">
                        <h4> کارشناسی ارشد </h4>
                      </div>
                      <v-card-title id="ProgramRankHome">
                        <h6>    رتبه: </h6>
                        <h4>  36 </h4>
                      </v-card-title>
                    </v-img>

                    <div id="CardBottomHome">
                      <v-img id="CardLogoHome" src="https://youthopportunity.net/wp-content/uploads/2019/11/1200px-UnivOfTokyo_logo.svg_.png"></v-img>
                      <v-card-subtitle id="CardSubtitle1Home" class="pb-0">پردازش اطلاعات هوشمند </v-card-subtitle>
                      <v-card-subtitle id="CardSubtitle2Home" class="pb-0">دانشگاه توکیو </v-card-subtitle>
                      <v-card-text id="CardSubtitle3Home" class="pb-0">ژاپن </v-card-text>
                      <span class="inner-circle-Home">
              <img id="FlagHome" src="https://cdn.countryflags.com/thumbs/japan/flag-800.png">
            </span>
                    </div>
                  </v-card>
                </div>
                <div class="card-back-Home">
                  <v-card class="card-back-content-Home" width="500" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <div id="CardBottomHome">
                      <v-card-text id="BackTextHome">
                        <div id="RightBackCardHome">
                          <div id="BackLogoContentHome">
                            <img id="BackLogoHome" src="https://youthopportunity.net/wp-content/uploads/2019/11/1200px-UnivOfTokyo_logo.svg_.png">
                          </div>
                          <div id="BackUniversityNameHome">
                            <div id="BackUniversityFarsiNameHome">
                              پردازش اطلاعات هوشمند<br>
                            </div>
                            <div id="BackUniversityEnglishNameHome">
                              دانشگاه توکیو
                            </div>
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            مدت زمان تحصیل: 2 سال
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            زبان آموزش: انگلیسی
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            شهر: توکیو
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIconHome" src="../assets/Icons/Website.png"> </a>
                            <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="WebsiteHome"> tue.nl </h1> </a>
                          </div>
                        </div>
                        <div id="LeftBackCardHome">
                          <div id="BackStarRatingHome">
                            <v-rating
                              dense
                              color="#F4BC1C"
                              background-color="#F4BC1C"
                              v-model="rating"
                              small
                            ></v-rating>
                          </div>
                          <div id="BackProgramDegreeHome">کارشناسی ارشد</div>
                          <div id="BackProgramRankHome">
                            <h6 id="BackRankTextHome">رتبه:</h6>
                            <h4 id="BackRankHome">36</h4>
                          </div>
                          <div id="BackUniversityCountryHome">ژاپن</div>
                        </div>
                        <v-btn color="#06090E" rounded id="ExploreTextHome">
                          <h3 id="MoreText4Home">بیشتر</h3>
                        </v-btn>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
            <div class="card-container-Home" id="EachCardHome">
              <div class="card-horizontal-Home">
                <div class="card-front-Home">
                  <v-card class="card-front-content-Home" max-width="420" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <v-img class="white--text align-end" height="220px" src="https://cdn.britannica.com/96/141196-050-C8E26CEB/Paulista-Museum-part-gardens-University-of-Sao.jpg">
                      <div id="StarRatingHome">
                        <v-rating
                          dense
                          color="#F4BC1C"
                          background-color="#F4BC1C"
                          v-model="rating"
                          small
                        ></v-rating>
                      </div>
                      <div id="DegreeHome">
                        <h4> کارشناسی ارشد </h4>
                      </div>
                      <v-card-title id="ProgramRankHome">
                        <h6>    رتبه: </h6>
                        <h4>   275 </h4>
                      </v-card-title>
                    </v-img>

                    <div id="CardBottomHome">
                      <v-img id="CardLogoHome" src="https://lh3.googleusercontent.com/proxy/JDa7oNMtVACNPhvsmEzvwNf0NsVZr0_ZQIoQnyoi4YQ0EJUxWaV4vGKSyjPY9WXY6Lao00xtYJjDm75MxFktgfZPdaYTlFvDRWE6OtvkMZqoLGUaYLasQiKoiY2rAdgkXMM"></v-img>
                      <v-card-subtitle id="CardSubtitle1Home" class="pb-0"> پردازش اطلاعات هوشمند </v-card-subtitle>
                      <v-card-subtitle id="CardSubtitle2Home" class="pb-0">دانشگاه سائو پائولو </v-card-subtitle>
                      <v-card-text id="CardSubtitle3Home" class="pb-0">برزیل</v-card-text>
                      <span class="inner-circle-Home">
              <img id="FlagHome" src="https://cdn.countryflags.com/thumbs/brazil/flag-800.png">
            </span>
                    </div>
                  </v-card>
                </div>
                <div class="card-back-Home">
                  <v-card class="card-back-content-Home" width="500" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <div id="CardBottomHome">
                      <v-card-text id="BackTextHome">
                        <div id="RightBackCardHome">
                          <div id="BackLogoContentHome">
                            <img id="BackLogoHome" src="https://lh3.googleusercontent.com/proxy/JDa7oNMtVACNPhvsmEzvwNf0NsVZr0_ZQIoQnyoi4YQ0EJUxWaV4vGKSyjPY9WXY6Lao00xtYJjDm75MxFktgfZPdaYTlFvDRWE6OtvkMZqoLGUaYLasQiKoiY2rAdgkXMM">
                          </div>
                          <div id="BackUniversityNameHome">
                            <div id="BackUniversityFarsiNameHome">
                              پردازش اطلاعات هوشمند<br>
                            </div>
                            <div id="BackUniversityEnglishNameHome">
                              دانشگاه سائو پائولو
                            </div>
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            مدت زمان تحصیل:2 سال
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            زبان آموزش: پرتغالی
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            شهر: سائو پائولو
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIconHome" src="../assets/Icons/Website.png"> </a>
                            <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="WebsiteHome"> tue.nl </h1> </a>
                          </div>
                        </div>
                        <div id="LeftBackCardHome">
                          <div id="BackStarRatingHome">
                            <v-rating
                              dense
                              color="#F4BC1C"
                              background-color="#F4BC1C"
                              v-model="rating"
                              small
                            ></v-rating>
                          </div>
                          <div id="BackProgramDegreeHome">کارشناسی ارشد</div>
                          <div id="BackProgramRankHome">
                            <h6 id="BackRankTextHome">رتبه:</h6>
                            <h4 id="BackRankHome">275</h4>
                          </div>
                          <div id="BackUniversityCountryHome">برزیل</div>
                        </div>
                        <v-btn color="#06090E" rounded id="ExploreTextHome">
                          <h3 id="MoreText4Home">بیشتر</h3>
                        </v-btn>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
            <div class="card-container-Home" id="EachCardHome1">
              <div class="card-horizontal-Home">
                <div class="card-front-Home">
                  <v-card class="card-front-content-Home" max-width="420" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <v-img class="white--text align-end" height="220px" src="https://www.tcd.ie/business/assets/img/BBS/campanile.jpg">
                      <div id="StarRatingHome">
                        <v-rating
                          dense
                          color="#F4BC1C"
                          background-color="#F4BC1C"
                          v-model="rating"
                          small
                        ></v-rating>
                      </div>
                      <div id="DegreeHome">
                        <h4> کارشناسی ارشد </h4>
                      </div>
                      <v-card-title id="ProgramRankHome">
                        <h6>    رتبه: </h6>
                        <h4>  164 </h4>
                      </v-card-title>
                    </v-img>

                    <div id="CardBottomHome">
                      <v-img id="CardLogoHome" src="https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png"></v-img>
                      <v-card-subtitle id="CardSubtitle1Home" class="pb-0"> رسانه دیجیتال تعاملی</v-card-subtitle>
                      <v-card-subtitle id="CardSubtitle2Home" class="pb-0">کالج ترینیتی دوبلین </v-card-subtitle>
                      <v-card-text id="CardSubtitle3Home" class="pb-0">ایرلند </v-card-text>
                      <span class="inner-circle-Home">
           <img id="FlagHome" src="https://cdn.countryflags.com/thumbs/ireland/flag-800.png">
         </span>
                    </div>
                  </v-card>
                </div>

                <div class="card-back-Home">
                  <v-card class="card-back-content-Home" width="500" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <div id="CardBottomHome">
                      <v-card-text id="BackTextHome">
                        <div id="RightBackCardHome">
                          <div id="BackLogoContentHome">
                            <img id="BackLogoHome" src="https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png">
                          </div>
                          <div id="BackUniversityNameHome">
                            <div id="BackUniversityFarsiNameHome">
                              رسانه دیجیتال تعاملی<br>
                            </div>
                            <div id="BackUniversityEnglishNameHome">
                              کالج ترینیتی دوبلین
                            </div>
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            مدت زمان تحصیل: 2 سال
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            زبان آموزش: انگلیسی
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            شهر: دوبلین
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIconHome" src="../assets/Icons/Website.png"> </a>
                            <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="WebsiteHome"> tue.nl </h1> </a>
                          </div>
                        </div>
                        <div id="LeftBackCardHome">
                          <div id="BackStarRatingHome">
                            <v-rating
                              dense
                              color="#F4BC1C"
                              background-color="#F4BC1C"
                              v-model="rating"
                              small
                            ></v-rating>
                          </div>
                          <div id="BackProgramDegreeHome">کارشناسی ارشد</div>
                          <div id="BackProgramRankHome">
                            <h6 id="BackRankTextHome">رتبه:</h6>
                            <h4 id="BackRankHome">164</h4>
                          </div>
                          <div id="BackUniversityCountryHome">ایرلند</div>
                        </div>
                        <v-btn color="#06090E" rounded id="ExploreTextHome">
                          <h3 id="MoreText4Home">بیشتر</h3>
                        </v-btn>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>

            <div class="card-container-Home" id="EachCardHome1">
              <div class="card-horizontal-Home">
                <div class="card-front-Home">
                  <v-card class="card-front-content-Home" max-width="420" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <v-img class="white--text align-end" height="220px" src="https://www.tcd.ie/business/assets/img/BBS/campanile.jpg">
                      <div id="StarRatingHome">
                        <v-rating
                          dense
                          color="#F4BC1C"
                          background-color="#F4BC1C"
                          v-model="rating"
                          small
                        ></v-rating>
                      </div>
                      <div id="DegreeHome">
                        <h4> کارشناسی ارشد </h4>
                      </div>
                      <v-card-title id="ProgramRankHome">
                        <h6>    رتبه: </h6>
                        <h4>  164 </h4>
                      </v-card-title>
                    </v-img>

                    <div id="CardBottomHome">
                      <v-img id="CardLogoHome" src="https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png"></v-img>
                      <v-card-subtitle id="CardSubtitle1Home" class="pb-0"> رسانه دیجیتال تعاملی</v-card-subtitle>
                      <v-card-subtitle id="CardSubtitle2Home" class="pb-0">کالج ترینیتی دوبلین </v-card-subtitle>
                      <v-card-text id="CardSubtitle3Home" class="pb-0">ایرلند </v-card-text>
                      <span class="inner-circle-Home">
             <img id="FlagHome" src="https://cdn.countryflags.com/thumbs/ireland/flag-800.png">
            </span>
                    </div>
                  </v-card>
                </div>

                <div class="card-back-Home">
                  <v-card class="card-back-content-Home" width="500" mx-auto grid-list-md id="Card4Home" :elevation="3">
                    <div id="CardBottomHome">
                      <v-card-text id="BackTextHome">
                        <div id="RightBackCardHome">
                          <div id="BackLogoContentHome">
                            <img id="BackLogoHome" src="https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png">
                          </div>
                          <div id="BackUniversityNameHome">
                            <div id="BackUniversityFarsiNameHome">
                              رسانه دیجیتال تعاملی<br>
                            </div>
                            <div id="BackUniversityEnglishNameHome">
                              کالج ترینیتی دوبلین
                            </div>
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            مدت زمان تحصیل: 2 سال
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            زبان آموزش: انگلیسی
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            شهر: دوبلین
                          </div>
                          <div class="BackUniversityInfoHome">
                            <br>
                            <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIconHome" src="../assets/Icons/Website.png"> </a>
                            <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="WebsiteHome"> tue.nl </h1> </a>
                          </div>
                        </div>
                        <div id="LeftBackCardHome">
                          <div id="BackStarRatingHome">
                            <v-rating
                              dense
                              color="#F4BC1C"
                              background-color="#F4BC1C"
                              v-model="rating"
                              small
                            ></v-rating>
                          </div>
                          <div id="BackProgramDegreeHome">کارشناسی ارشد</div>
                          <div id="BackProgramRankHome">
                            <h6 id="BackRankTextHome">رتبه:</h6>
                            <h4 id="BackRankHome">164</h4>
                          </div>
                          <div id="BackUniversityCountryHome">ایرلند</div>
                        </div>
                        <v-btn color="#06090E" rounded id="ExploreTextHome">
                          <h3 id="MoreText4Home">بیشتر</h3>
                        </v-btn>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
          </div>
          <div id="ContinueTextHome">
            <v-btn id="ContinueButtonHome" text>
              مشاهده‌ی
              <br>
              ادامه‌ی نتایج
              <br>
              در
              اپلیکاتور
            </v-btn>
          </div>
          <div class="leftSideOfPage leftSide4">
            <div id="ApplicatorTextHome"> اپلیکاتور </div>
            <div id="FourthScrollDotsHome">
              <a href="#1"> <span class="dotHome"></span> </a>
              <a href="#2"> <span class="dotHome"></span> </a>
              <a href="#3"> <span class="dotHome"></span> </a>
              <a href="#4"> <span class="dotHome fourthDotHome"></span> </a>
            </div>
          </div>

          <v-text-field class="fourthTextFieldHome" prepend-inner-icon="search" dense outlined rounded solo flat placeholder="جستجوی دانشگاه یا کشور"> </v-text-field>
        </div>

      </div>
      <div v-else>
        <div class="content">
          <v-card id="SCardHome" height="200" width="350" color="#C3C3C3">
            <div id="SignInQuestionHome">
              وارد حساب کاربری خود نشده‌اید؟
            </div>
            <router-link :to="{name: 'SignIn'}" id="SignInLinkHome">
              <div id="SignInTextHome">
                ورود
              </div>
            </router-link>
            <div id="SignUpQuestionHome">
              در اپلیکاتو ثبت نام نکرده‌اید؟
            </div>
            <router-link :to="{name: 'SignUp'}" id="SignUpLinkHome">
              <div id="SignUpTextHome">
                ثبت نام
              </div>
            </router-link>
          </v-card>
          <div class="leftSideOfPage leftSide42">
            <div id="ApplicatorText2Home"> اپلیکاتور </div>
            <div id="FourthScrollDots2Home">
              <a href="#1"> <span class="dotHome"></span> </a>
              <a href="#2"> <span class="dotHome"></span> </a>
              <a href="#3"> <span class="dotHome"></span> </a>
              <a href="#4"> <span class="dotHome fourthDotHome"></span> </a>
            </div>
          </div>

          <v-text-field class="fourthTextField2Home" prepend-inner-icon="search" dense outlined rounded solo flat placeholder="جستجوی دانشگاه یا کشور"> </v-text-field>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
  import AppbarHeader from '../components/FirstAppbarHeader'
  export default {
    components: {
      'app-header': AppbarHeader
    },
    data () {
      return {
        loggedIn: false,
        dropdown_edit: [
          { text: 'هنر و علوم انسانی' },
          { text: 'مهندسی و فناوری' },
          { text: 'علوم زیستی و پزشکی' },
          { text: 'علوم طبیعی' },
          { text: 'علوم اجتماعی و مدیریت' }
        ],
        welfare: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        universities: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        cost: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        contamination: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        major: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'},  {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        rank: [
          {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}, {name:'ireland'}
        ],
        rating: 5,
        programs: [
          {
            name: 'پردازش اطلاعات هوشمند',
            university: 'دانشگاه توکیو',
            degree: 'کارشناسی ارشد',
            rank: 36,
            country: 'ژاپن',
            duration: '2 سال',
            language: 'انگلیسی',
            city: 'توکیو',
            rating: 5,
            image:
              'https://jpninfo.com/wp-content/uploads/2017/11/Tokyo-University.jpg',
            style: {
              borderColor: '#C40233'
            },
            flag: 'https://cdn.countryflags.com/thumbs/japan/flag-800.png',
            logo: 'https://youthopportunity.net/wp-content/uploads/2019/11/1200px-UnivOfTokyo_logo.svg_.png'
          },
          {
            name: 'پردازش اطلاعات هوشمند',
            university: ' دانشگاه سائو پائولو',
            degree: 'کارشناسی ارشد',
            rank: 275,
            country: 'برزیل',
            duration: '2 سال',
            language: 'پرتغالی',
            city: ' سائو پائولو',
            rating: 3,
            image: 'https://cdn.britannica.com/96/141196-050-C8E26CEB/Paulista-Museum-part-gardens-University-of-Sao.jpg',
            flag: 'https://cdn.countryflags.com/thumbs/brazil/flag-800.png',
            style: {
              borderColor: '#C40233'
            },
            logo: 'https://lh3.googleusercontent.com/proxy/JDa7oNMtVACNPhvsmEzvwNf0NsVZr0_ZQIoQnyoi4YQ0EJUxWaV4vGKSyjPY9WXY6Lao00xtYJjDm75MxFktgfZPdaYTlFvDRWE6OtvkMZqoLGUaYLasQiKoiY2rAdgkXMM'
          },
          {
            name: 'رسانه دیجیتال تعاملی',
            university: ' کالج ترینیتی دوبلین',
            degree: 'کارشناسی ارشد',
            rank: 164,
            country: 'ایرلند',
            duration: '2 سال',
            language: 'انگلیسی',
            city: 'دوبلین',
            rating: 3,
            image: 'https://www.tcd.ie/business/assets/img/BBS/campanile.jpg',
            flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
            style: {
              borderColor: '#C40233'
            },
            logo: 'https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png'
          },
          {
            name: 'رسانه دیجیتال تعاملی',
            university: ' کالج ترینیتی دوبلین',
            degree: 'کارشناسی ارشد',
            rank: 164,
            country: 'ایرلند',
            duration: '2 سال',
            language: 'انگلیسی',
            city: 'دوبلین',
            rating: 3,
            image: 'https://www.tcd.ie/business/assets/img/BBS/campanile.jpg',
            flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
            style: {
              borderColor: '#C40233'
            },
            logo: 'https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png'
          }
        ]
      }
    },
    beforeCreate : function() {
      if (localStorage.getItem("token")) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    },
    created : function() {
      if (localStorage.getItem("token")) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    }
  }
</script>
<style>
  .secondRowHome31, .secondRowHome32, .secondRowHome33, .secondRowHome34 {
    color: white;
    height: 30px;
    margin-top: 2%;
    margin-left: 1%;
    width: 30%;
    border-radius: 15px;
    /* display: inline-block; */
    padding-top: 5px;
    font-size: 0.75em;
  }
  .secondRowHome21, .secondRowHome22, .secondRowHome23 {
    color: white;
    height: 30px;
    margin-top: 2%;
    margin-left: 1%;
    width: 43%;
    border-radius: 15px;
    /* display: inline-block; */
    padding-top: 5px;
    font-size: 0.75em;
  }
  .secondRowHome21 {
    background-color: #7550A6;
  }
  .secondRowHome22 {
    background-color: #0C4B7E;
  }
  .secondRowHome23 {
    background-color: #EA6932;
  }
  .secondRowHome31 {
    background-color: #0C4B7E;
  }
  .secondRowHome32 {
    background-color: #EA6932;
  }
  .secondRowHome33 {
    background-color: #E61D2F;
  }
  .secondRowHome34 {
    background-color: #7550A6;
  }
  * {
    box-sizing: border-box;
  }
  html {
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    background-color: black;
  }
  section {
    border-bottom: 1px solid white;
    padding: 1rem;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
  }
  .theme--light.v-application{
    background-color: #1E2126;
  }

  .theme--light.v-list{
    background: #1E2126;
  }
  .v-list-item__content{
    color: white;
  }
  .theme--light.v-list-item:hover:before {
    opacity: 0.14;
  }
  #HomePage {
    margin-top: 48px;
  }
  .content {
    height: 100vh;
  }
  .scroll1Home {
    background-image: url("../assets/Oxford.jpg");
    background-size: cover;
    background-position: absolute;
  }
  .scroll3Home, .scroll4Home, .scroll2Home {
    background-image: url("../assets/OxfordBlur.png");
    background-size: cover;
    background-position: absolute;
  }
  #ApplicatoTextHome {
    font-family: "MRT_Ghalam-2";
    position: relative;
    top: 6%;
    left: 35%;
    color: #FFC61B;
    font-size: 7.5em;
  }
  #MainTextHome {
    color: #0793FF;
    font-size: 1.85em;
    position: relative;
    left: 32.2%;
    top: 2%;
  }
  #FirstScrollDotsHome {
    position: relative;
    top: 9.6%;
    width: 1.5%;
    position: relative;
    right: 98%;
  }
  .dotHome {
    height: 20px;
    width: 20px;
    background-color: #FFC61B;
    opacity: 0.5;
    border-radius: 50%;
    display: block;
    margin-top: 5px;
  }
  .dotHome:hover {
    opacity: 1;
  }
  .firstDotHome, .secondDotHome, .thirdDotHome, .fourthDotHome {
    background-color: #26AAF7;
    opacity: 1;
  }
  .firstTextFieldHome {
    position: relative;
    bottom: 38.5%;
    width: 230px;
    float: left;
    left: 2%;
  }
  #SecondScrollDotsHome {
    position: relative;
    /* top: 11.8%; */
    width: 1.5%;
    float: left;
    /* right: 97%; */
  }
  .overFlowHome {
    position: relative;
    width: 75%;
    border-radius: 20px;
    right: 13%;
    bottom: 2%;
  }
  #Card2Home {
    border-radius: 20px;
    margin-left: 2%;
    height: 500px;
    width: 345px;
    /* top: 0; */
    display: inline-block;
  }
  #Card2Home3 {
    border-radius: 20px;
    margin-left: 2%;
    height: 500px;
    width: 345px;
    /* top: 0; */
    display: inline-block;
  }
  .alignHome2 {
    /* display:flex;
    flex-flow:row wrap; */
    position: absolute;
    top: 23%;
    height: 100vh;
    width: 100%;
  }
  .secondTextFieldHome {
    position: relative;
    /* bottom: 89.9%; */
    width: 230px;
    position: relative;
    /* bottom: 41.3%; */
    float: left;
    top: 6.3%;
  }
  .hr2Home {
    position: relative;
    display: block;
    border: 0;
    border-top: 1px solid black;
    padding: 0;
    bottom: 2%;
  }
  .hr23Home {
    position: relative;
    display: block;
    border: 0;
    border-top: 1px solid black;
    padding: 0;
    bottom: 3%;
  }
  #MajorsHome {
    letter-spacing: 0px;
    display: block;
    text-align: right;
  }
  #MoreText2Home, #MoreText3Home {
    width: 43%;
    height: 9%;
    position: relative;
    right: 0.5%;
    top: 3%;
    letter-spacing: 0px;
  }
  #MoreText3Home {
    height: 7%;
  }
  #UniversityTextHome {
    font-size: 1.9em;
    color: white;
    position: relative;
    float: right;
    bottom: 5px;
    /* right: 92.5%; */
    width: 5%;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  .alignHome {
    /* display:flex;
    flex-flow:row wrap; */
    position: absolute;
    right: 2%;
    height: 100vh;
    width: 100%;
    margin: auto;
    display: block;
  }
  #CardHome, #CardHome1, #CardHome12, #CardHome2  {
    margin-left: 5%;
    border-radius: 20px;
    position: relative;
    top: 15%;
    height: 250px;
    width: 430px;
    display: inline-block;
    margin-bottom: 1%;
  }
  /* #CardHome {
    margin-bottom: 1%;
  } */
  .res2Home {
    position: relative;
    margin-bottom: 10%;
  }
  .hrHome {
    position: relative;
    display: block;
    border: 0;
    border-top: 1px solid black;
    padding: 0;
    bottom: 5%;
  }
  .thirdTextFieldHome {
    position: relative;
    top: 6.4%;
    /* bottom: 113.7%; */
    width: 230px;
    float: left;
  }
  #ThirdScrollDotsHome {
    position: relative;
    /* top: 11.8%; */
    width: 1.5%;
    float: left;
    /* right: 97%; */
  }
  /* text rotate: https://css-tricks.com/snippets/css/text-rotation/ */
  #CountryTextHome {
    font-size: 1.9em;
    color: white;
    position: relative;
    float: right;
    top: 2px;
    /* right: 92.5%; */
    width: 5%;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  #RankHome {
    text-align: right;
    position: relative;
    top: 2px;
    right: 5px;
    font-size: 1.2em;
  }
  .chipHome, .chip2Home{
    height: 25px;
  }
  .chip2Home {
    margin-bottom: 6px;
  }
  .chipButton2Home {
    width: 120px;
  }
  #ChipGroupHome {
    position: relative;
    right: 5%;
  }
  #ChipGroup3Home {
    right: 1.5%;
  }
  #ChipGroup2Home {
    right: 3%;
    bottom: 1%;
  }
  .numberCircleHome {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    padding: 5%;
    background: black;
    color: white;
    text-align: center;
    font-size: 15px;
    position: relative;
    bottom: 25%;
    z-index:1000;
    /* display: inline-block; */
    float: right;
    /* right: -12%; */
  }
  #MoreTextHome {
    width: 28%;
    height: 18%;
    position: relative;
    right: 1.5%;
    top: 6.5%;
    letter-spacing: 0px;
  }
  #SCardHome {
    position: relative;
    top: 35%;
    border-radius: 20px;
    opacity: 0.85;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  #SignInQuestionHome {
    height: 30%;
    padding: 5%;
    font-size: 1.3em;
    margin: auto;
  }
  #SignInTextHome {
    background-color: #FFC61B;
    height: 27%;
    font-size: 2em;
  }
  #SignUpQuestionHome {
    height: 30%;
    padding: 5%;
    font-size: 1.3em;
    margin: auto;
  }
  #SignUpTextHome {
    background-color: #FFC61B;
    height: 27%;
    font-size: 2em;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    /* padding: 1%; */
  }
  #SignInLinkHome, #SignUpLinkHome {
    text-decoration: none;
    color: black;
  }
  .fourthTextFieldHome {
    width: 230px;
    position: relative;
    bottom: 21.5%;
    float: left;
  }
  .fourthTextField2Home {
    width: 230px;
    position: relative;
    bottom: 21.3%;
    float: left;
  }
  #FourthScrollDotsHome {
    position: relative;
    /* top: 11.8%; */
    width: 1.5%;
    float: left;
    /* right: 97%; */
  }
  .leftSideOfPage {
    width: 2%;
    float: left;
    position: relative;
    left: 2%;
  }
  .leftSide42 {
    top: 13%;
  }
  .leftSide4 {
    top: 13%;
  }
  .leftSide2 {
    top: 40.7%;
  }
  .leftSide3 {
    top: 40.7%;
  }
  #FourthScrollDots2Home {
    position: relative;
    /* top: 11.8%; */
    width: 1.5%;
    float: left;
    /* right: 97%; */
  }
  /* text rotate: https://css-tricks.com/snippets/css/text-rotation/ */
  #ApplicatorTextHome {
    font-size: 1.9em;
    color: white;
    position: relative;
    float: right;
    width: 5%;
    bottom: 5px;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  #ApplicatorText2Home {
    font-size: 1.9em;
    color: white;
    position: relative;
    float: right;
    bottom: 8px;
    /* right: 92.5%; */
    width: 5%;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  .alignHome4 {
    position: absolute;
    top: 4%;
    height: 100vh;
    width: 70%;
    right: 15%;
  }
  .card-container-Home {
    -webkit-perspective: 1200;
    -moz-perspective: 1200;
    perspective: 1200;
  }
  .card-horizontal-Home {
    height: 220px;
    width: 420px;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    /* transition-delay: 2s; */
  }
  .card-front-Home,
  .card-back-Home {
    height: 100%;
    width: 100%;
    position: absolute;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    /* transition-delay: 2s; */
    max-width: 420px;
  }
  .card-back-Home {
    -moz-transform: rotateY(179.9deg);
    -webkit-transform: rotateY(179.9deg);
    transform: rotateY(179.9deg);
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }
  /* .card-back-hr {
    -webkit-transform:rotateX(179.9deg);
    -moz-transform:rotateX(179.9deg);
    transform:rotateX(179.9deg);
  } */
  .card-horizontal-Home:hover {
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }
  #FlagHome {
    border-radius: 20px;
    width: 33px;
    height: 33px;
    position: relative;
    top: 8%;
  }
  #CardSubtitle3Home {
    text-align: left;
    position: relative;
    bottom: 10px;
    color: #042d4b;
    font-size: 15px;
    font-family: "B Koodak";
  }
  .inner-circle-Home {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-style: solid;
    border-width: 5px;
    border-color: #C40233;
    position: absolute;
    pointer-events: none;
    right: 86%;
    top: 74%;
  }
  #EachCardHome, #EachCardHome1 {
    margin-left: 2%;
    margin-bottom: 10%;
    display: inline-block;
  }
  /*  */
  #CardSubtitle1Home,
  #CardSubtitle2Home {
    font-family: "B Koodak";
    text-align: right;
    margin-right: 14%;
    font-size: 1.2em;
    color: #042d4b;
    position: relative;
  }
  #CardSubtitle1Home {
    top: 7px;
  }
  #CardSubtitle2Home {
    font-size: 0.9em;
    bottom: 7px;
  }

  #UniversitiesContentHome {
    margin-left: 4%;
    margin-right: 3%;
  }

  #CardBottomHome {
    background-color: #c3c3c3;
  }
  #ProgramRankHome {
    float: left;
    display: inline;
    background-color: black;
    border-radius: 20px;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    position: relative;
    bottom: 10px;
    left: 2%;
  }
  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793ff;
  }
  #BackUniversityNameHome {
    font-size: 1.3em;
    color: #042d4b;
    display: inline-block;
    position: relative;
    bottom: 10px;
    right: 1%;
  }
  #BackUniversityEnglishNameHome {
    font-size: 15px;
    font-family: "B Koodak";
  }
  .BackUniversityInfoHome {
    font-size: 1.2em;
    color: #042d4b;
    position: relative;
    right: 5px;
  }
  #BackLogoHome {
    height: 50px;
    width: 50px;
    /* border-radius: 20px; */
  }
  #BackLogoContentHome {
    display: inline-block;
  }
  #WebsiteIconHome {
    width: 30px;
    position: relative;
  }
  #WebsiteHome {
    position: relative;
    display: inline-block;
    font-size: 1.2em;
    color: #8691db;
    text-decoration: underline;
    bottom: 10px;
    right: 5px;
  }
  #StarRatingHome {
    position: relative;
    right: 74%;
    bottom: 90px;
    background-color: black;
    border-radius: 20px;
    width: 24%;
    padding-top: 0.5%;
  }
  #DegreeHome {
    position: relative;
    right: 74%;
    bottom: 85px;
    background-color: black;
    border-radius: 20px;
    width: 24%;
    padding-top: 0.5%;
  }
  #BackStarRatingHome {
    position: relative;
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    padding-top: 2%;
    padding-right: 1%;
    padding-left: 0px;
  }
  #BackRankTextHome,
  #BackRankHome {
    display: inline-block;
  }
  #BackProgramRankHome,
  #BackProgramDegreeHome {
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    position: relative;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  #BackUniversityCountryHome {
    background-color: black;
    border-radius: 20px;
    position: relative;
    text-align: center;
  }
  #MoreText4Home {
    position: relative;
    right: 25%;
    color: white;
    text-decoration: none;
  }
  #CardLogoHome {
    position: absolute;
    height: 50px;
    width: 50px;
    /* border-radius: 20px; */
    top: 76%;
    right: 3%;
  }
  #LeftBackCardHome {
    float: left;
    display: inline-block;
    color: white;
    position: relative;
    bottom: 240px;
  }
  #ExploreTextHome {
    position: relative;
    right: 28%;
    float: left;
    bottom: 0px;
    width: 28%;
  }
  #ExploreTextLinkHome {
    text-decoration: none;
  }
  #RightBackCardHome {
    text-align: right;
  }
  #Card4Home {
    border-radius: 10px;
    background-color: #c3c3c3;
    position: relative;
    top: 13%;
    height: 315px;
  }
  #ContinueTextHome {
    background-color: #FFC61B;
    padding: 10px;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    position: relative;
    right: 2.5%;
    top: 37%;
  }
  #ContinueButtonHome {
    letter-spacing: 0px;
    font-size: 30px;
    width: 200px;
    height: 200px;
    bottom: 10px;
    left: 10px;
  }
  @media only screen and (max-width: 1535px) {
    #Card2Home, #Card2Home3 {
      /* height: 500px; */
      width: 330px;
      /* width: 28%; */
    }
    #ChipGroupHome {
      right: 3%;
    }
    .alignHome2 {
      right: 0%;
    }
    /* .alignHome {
      right: 14%;
    } */
    /* #SCardHome {
      right: 40%;
    } */
    #SecondScrollDotsHome {
      bottom: 37%;
    }
    #ThirdScrollDotsHome {
      bottom: 59.2%;
    }
    #Card4Home {
      top: 0px;
    }
    #ContinueTextHome {
      /* width: 50px;
      height: 200px; */
      right: 0%;
    }
    /* #ApplicatorText2Home {
      top: 1.3%;
    } */
    /* #ContinueButtonHome {
      font-size: 11px;
      left: 86px;
      font-weight: bold;
    } */
    /* .alignHome4 {
      right: 8%;
    } */
    /* #CardHome, #CardHome1 {
      margin-left: 5px;
    } */
  }
  @media only screen and (max-width: 1358px) {
    #CardHome {
      /* margin-left: 5px; */
      /* display: none; */
    }
    /* #ApplicatorText2Home {
      top: 1.5%;
    } */
    /* .alignHome {
        display:flex;
        flex-flow:row wrap;
        position: relative;
        right: 16%;
        width: 68%;
        height: 100%;
    } */
  }
  @media only screen and (max-width: 1271px) {
    #EachCardHome1 {
      display: none;
    }
    #EachCardHome {
      /* margin-left: 2%; */
      position: relative;
      top: 3%;
      margin-bottom: 100px;
    }
    #ContinueTextHome {
      width: 150px;
    }
    #ContinueButtonHome {
      font-size: 20px;
      left: 30px;
    }
  }
  @media only screen and (max-width: 1180px) {
    .res2Home {
      display: none;
    }
    /* #CardHome {
      margin-left: 10px;
    } */
    /* .alignHome {
        right: 5%;
    } */
    #Card2Home {
      display: none;
    }
    /* #Card2Home3 {
      width: 350px;
    } */
    /* #ApplicatorText2Home {
      top: 1%;
    } */
    /* #SCardHome {
      right: 30%;
    } */
  }
  @media only screen and (max-width: 1078px) {
    /* #ApplicatorText2Home {
      top: 0%;
    } */
  }
  @media only screen and (max-width: 1078px) {
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 977px) {
    #CardHome12, #CardHome2 {
      display: none;
    }
    #ContinueTextHome {
      width: 100px;
    }
    #ContinueButtonHome {
      font-size: 15px;
      left: 60px;
    }
  }
  @media only screen and (max-width: 883px) {
    #ApplicatoTextHome {
      left: 32%;
    }
    #MainTextHome {
      left: 30%;
    }
  }
  @media only screen and (max-width: 908px) {
    #ApplicatoTextHome {
      left: 32%;
    }
    #MainTextHome {
      left: 26%;
    }
  }
  @media only screen and (max-width: 890px) {
    #SignInTextHome, #SignUpTextHome {
      height: 25%;
      font-size: 1.6em;
    }
    #SignUpQuestionHome {
      font-size: 1em;
    }
    #SignInQuestionHome {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 610px) {
    #ApplicatoTextHome {
      left: 24%;
    }
    #MainTextHome {
      left: 16%;
    }
    #SignUpQuestionHome {
      position: relative;
      /* right: 23%; */
    }
    #SignInTextHome {
      position: relative;
      /* bottom: 10px; */
    }
    #ApplicatorText2Home {
      /* top: -1%; */
    }
    #ContinueTextHome {
      width: 80px;
    }
    #ContinueButtonHome {
      font-size: 15px;
      left: 70px;
    }
  }
</style>
