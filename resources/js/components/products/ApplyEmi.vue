<template>
  <div>
    <form-wizard
      color="#e67e22"
      errorColor="rgba(var(--vs-danger), 1)"
      title=""
      :subtitle="null"
      finishButtonText="Submit"
      :hide-buttons="true"
      stepSize="sm"
      ref="emiApplyWizard"
    >
      <!--  -->
      <tab-content
        title="Personal Info"
        class="mb-5"
        icon="bi bi-person"
        :before-change="validatePersonalInfo"
      >
        <div class="card">
          <div class="card-body">
            <form data-vv-scope="step-1">
              <div class="form-group row">
                <div class="col-sm-4 mt-3">
                  <label for="">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="emiData.name"
                    name="name"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.name')"
                    >{{ errors.first("step-1.name") }}</span
                  >
                </div>
                <div class="col-sm-4 mt-3">
                  <label for="">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="emiData.email"
                    name="email"
                    v-validate="'email|required'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.email')"
                    >{{ errors.first("step-1.email") }}</span
                  >
                </div>
                <div class="col-sm-4 mt-3">
                  <label for="">Contact Number</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="emiData.contact_number"
                    name="contact_number"
                    v-validate="'required|numeric'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.contact_number')"
                    >{{ errors.first("step-1.contact_number") }}</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="">Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="emiData.address"
                  name="address"
                  v-validate="'required'"
                />
                <span
                  class="text-danger text-sm mt-1"
                  v-if="errors.has('step-1.address')"
                  >{{ errors.first("step-1.address") }}</span
                >
              </div>
              <div class="form-group row">
                <div class="col-sm-4 mt-3">
                  <label for="">Gender</label>
                  <select
                    class="form-control"
                    v-model="emiData.gender"
                    name="gender"
                    v-validate="'required'"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.gender')"
                    >{{ errors.first("step-1.gender") }}</span
                  >
                </div>
                <div class="col-sm-4 mt-3">
                  <label for="">Date of Birth (AD)</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="emiData.dob_ad"
                    name="dob_ad"
                    @change="changeDate('ad')"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.dob_ad')"
                    >{{ errors.first("step-1.dob_ad") }}</span
                  >
                </div>
                <div class="col-sm-4 mt-3">
                  <label for="">Date of Birth (BS)</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="emiData.dob_bs"
                    name="dob_bs"
                    v-validate="'required'"
                    @change="changeDate('bs')"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-1.dob_bs')"
                    >{{ errors.first("step-1.dob_bs") }}</span
                  >
                </div>
              </div>

              <button
                type="button"
                class="btn cart-btn btn-normal btn-sm"
                @click="changeTab('next')"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </tab-content>
      <tab-content
        title="Bank Information"
        class="mb-5"
        icon="bi bi-bank"
        :before-change="validateBankInformation"
      >
        <div class="card">
          <div class="card-body">
            <form data-vv-scope="step-2">
              <div class="form-group row">
                <div class="col-sm-6 mt-3">
                  <label for="">Do you have credit card?</label>
                  <select
                    name="credit_card"
                    v-model="emiData.credit_card"
                    class="form-control"
                    v-validate="'required'"
                  >
                    <option value="">Please Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.credit_card')"
                    >{{ errors.first("step-2.credit_card") }}</span
                  >
                </div>
                <div class="col-sm-6 mt-3">
                  <label for="">Select your bank</label>
                  <select
                    name="bank"
                    v-validate="'required'"
                    class="form-control"
                    v-model="emiData.bank"
                  >
                    <option value="">Please Select Bank</option>
                    <option
                      v-for="bank in banks"
                      :key="`bank${bank.id}`"
                      :value="bank.id"
                    >
                      {{ bank.name }}
                    </option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.bank')"
                    >{{ errors.first("step-2.bank") }}</span
                  >
                </div>
              </div>

              <div
                class="form-group row credit-card--input"
                :class="emiData.credit_card === '1' ? '' : 'd-none'"
              >
             
                <div class="col-sm-6">
                  <div class="container preload">
                    <div class="creditcard">
                      <div class="front">
                        <div id="ccsingle"></div>
                        <svg
                          version="1.1"
                          id="cardfront"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 750 471"
                          style="enable-background: new 0 0 750 471"
                          xml:space="preserve"
                        >
                          <g id="Front">
                            <g id="CardBackground">
                              <g id="Page-1_1_">
                                <g id="amex_1_">
                                  <path
                                    id="Rectangle-1_1_"
                                    class="lightcolor grey"
                                    d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"
                                  />
                                </g>
                              </g>
                              <path
                                class="darkcolor greydark"
                                d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                              />
                            </g>
                            <text
                              transform="matrix(1 0 0 1 60.106 295.0121)"
                              id="svgnumber"
                              class="st2 st3 st4"
                            >
                              {{
                                emiData.card_number
                                  ? emiData.card_number
                                  : "xxxx xxxx xxxx xxxx"
                              }}
                            </text>
                            <text
                              transform="matrix(1 0 0 1 54.1064 428.1723)"
                              id="svgname"
                              class="st2 st5 st6"
                            >
                              {{ emiData.card_holder_name }}
                            </text>
                            <text
                              transform="matrix(1 0 0 1 54.1074 389.8793)"
                              class="st7 st5 st8"
                            >
                              cardholder name
                            </text>
                            <text
                              transform="matrix(1 0 0 1 479.7754 388.8793)"
                              class="st7 st5 st8"
                            >
                              expiration
                            </text>
                            <text
                              transform="matrix(1 0 0 1 65.1054 241.5)"
                              class="st7 st5 st8"
                            >
                              card number
                            </text>
                            <g>
                              <text
                                transform="matrix(1 0 0 1 574.4219 433.8095)"
                                id="svgexpire"
                                class="st2 st5 st9"
                              >
                                {{ emiData.card_expiry_date }}
                              </text>
                              <text
                                transform="matrix(1 0 0 1 479.3848 417.0097)"
                                class="st2 st10 st11"
                              >
                                VALID
                              </text>
                              <text
                                transform="matrix(1 0 0 1 479.3848 435.6762)"
                                class="st2 st10 st11"
                              >
                                THRU
                              </text>
                              <polygon
                                class="st2"
                                points="554.5,421 540.4,414.2 540.4,427.9 		"
                              />
                            </g>
                            <g id="cchip">
                              <g>
                                <path
                                  class="st2"
                                  d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                                />
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="82"
                                    y="70"
                                    class="st12"
                                    width="1.5"
                                    height="60"
                                  />
                                </g>
                                <g>
                                  <rect
                                    x="167.4"
                                    y="70"
                                    class="st12"
                                    width="1.5"
                                    height="60"
                                  />
                                </g>
                                <g>
                                  <path
                                    class="st12"
                                    d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                                  />
                                </g>
                                <g>
                                  <rect
                                    x="82.8"
                                    y="82.1"
                                    class="st12"
                                    width="25.8"
                                    height="1.5"
                                  />
                                </g>
                                <g>
                                  <rect
                                    x="82.8"
                                    y="117.9"
                                    class="st12"
                                    width="26.1"
                                    height="1.5"
                                  />
                                </g>
                                <g>
                                  <rect
                                    x="142.4"
                                    y="82.1"
                                    class="st12"
                                    width="25.8"
                                    height="1.5"
                                  />
                                </g>
                                <g>
                                  <rect
                                    x="142"
                                    y="117.9"
                                    class="st12"
                                    width="26.2"
                                    height="1.5"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Back"></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <span class="text-danger text-sm" v-if="card_error">
                    Fill all the card details.
                  </span>
                  <div class="form-container">
                    <div class="field-container">
                      <label for="name">Name</label>
                      <input
                        id="name"
                        maxlength="20"
                        type="text"
                        v-model="emiData.card_holder_name"
                      />
                    </div>

                    <div class="field-container">
                      <label for="cardnumber">Card Number</label>
                      <input
                        id="cardnumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        type="text"
                        pattern="[0-9]*"
                        v-model="emiData.card_number"
                        inputmode="numeric"
                        class="cc-number"
                      />
                    </div>
                    <div class="field-container">
                      <label for="expirationdate">Expiration (mm/yy)</label>
                      <input
                        id="expirationdate"
                        type="text"
                        pattern="[0-9]*"
                        placeholder="MM/YY"
                        class="cc-expires"
                        v-model="emiData.card_expiry_date"
                        inputmode="numeric"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group row" v-if="emiData.credit_card === '0'">
                <div class="col-sm-4 mt-3">
                  <label for="">Vehicle</label>
                  <select
                    name="vehicle"
                    v-validate="'required'"
                    v-model="emiData.vehicle"
                    class="form-control"
                  >
                    <option value="">Select Vehicle</option>
                    <option value="2 Wheeler">2 Wheeler</option>
                    <option value="4 Wheeler">4 Wheeler</option>
                    <option value="Rented / Leased">Rented / Leased</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.vehicle')"
                    >{{ errors.first("step-2.vehicle") }}</span
                  >
                </div>

                <div class="col-sm-4 mt-3">
                  <label for="">Residental Staus</label>
                  <select
                    name="residental_status"
                    v-validate="'required'"
                    class="form-control"
                    v-model="emiData.residental_status"
                  >
                    <option value="">Select Residental Status</option>
                    <option value="Company Quarter">Company Quarter</option>
                    <option value="Live With Parents">Live With Parents</option>
                    <option value="Own Property">Own Property</option>
                    <option value="Mortage to Bank">Mortage to Bank</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.residental_status')"
                    >{{ errors.first("step-2.residental_status") }}</span
                  >
                </div>

                <div class="col-sm-4 mt-3">
                  <label for="">No. of Dependents</label>
                  <input
                    type="number"
                    name="no_of_dependents"
                    v-model="emiData.no_of_dependents"
                    class="form-control"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.no_of_dependents')"
                    >{{ errors.first("step-2.no_of_dependents") }}</span
                  >
                </div>

                <div class="col-sm-4 mt-3">
                  <label for="">Occupation</label>
                  <select
                    name="occupation"
                    v-validate="'required'"
                    v-model="emiData.occupation"
                    class="form-control"
                  >
                    <option value="">Select Employement</option>
                    <option value="Self Employed / Business">
                      Self Employed / Business
                    </option>
                    <option value="Doctor">Doctor</option>
                    <option value="Pilot">Pilot</option>
                    <option value="CA">CA</option>
                    <option value="Engineer / Architect">
                      Engineer / Architect
                    </option>
                    <option value="Managerial Level">Managerial Level</option>
                    <option value="Clerical Level">Clerical Level</option>
                    <option value="Penson Holder">Penson Holder</option>
                    <option value="Other">Other</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.occupation')"
                    >{{ errors.first("step-2.occupation") }}</span
                  >
                </div>

                <div class="col-sm-4 mt-3">
                  <label for="">Montly Income (Rs)</label>
                  <input
                    type="text"
                    name="monthly_income"
                    v-validate="'required'"
                    v-model="emiData.monthly_income"
                    class="form-control"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.monthly_income')"
                    >{{ errors.first("step-2.monthly_income") }}</span
                  >
                </div>
                <div class="col-sm-4 mt-3">
                  <label for="">Length of Employment</label>
                  <input
                    type="text"
                    name="length_of_employment"
                    v-validate="'required'"
                    v-model="emiData.length_of_employment"
                    class="form-control"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.length_of_employment')"
                    >{{ errors.first("step-2.length_of_employment") }}</span
                  >
                </div>

                <div class="col-sm-3 mt-3">
                  <label for="">Salary Certificate (Image)</label>
                  <div
                    class="
                      image--upload-section
                      text-center
                      salary-certificate-image
                    "
                    @click="openFileUploader('salaryCertificateUpload')"
                  >
                    <p>Click to upload</p>
                  </div>

                  <input
                    class="d-none"
                    type="file"
                    name="salary_certificate"
                    ref="salaryCertificateUpload"
                    v-validate="'required'"
                    @change="
                      fileUploaded(
                        'salaryCertificateUpload',
                        'salary-certificate-image'
                      )
                    "
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.salary_certificate')"
                    >{{ errors.first("step-2.salary_certificate") }}</span
                  >
                </div>

                <div class="col-sm-3 mt-3">
                  <label for="">Citizenship Copy (Image)</label>
                  <div
                    class="image--upload-section text-center citizenship-image"
                    @click="openFileUploader('citizenshipUpload')"
                  >
                    <p>Click to upload</p>
                  </div>
                  <input
                    class="d-none"
                    type="file"
                    v-validate="'required'"
                    name="citizenship"
                    ref="citizenshipUpload"
                    @change="
                      fileUploaded('citizenshipUpload', 'citizenship-image')
                    "
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.citizenship')"
                    >{{ errors.first("step-2.citizenship") }}</span
                  >
                </div>

                <div class="col-sm-3 mt-3">
                  <label for="">Passport Sized Photo (Image)</label>
                  <div
                    class="image--upload-section passport-image text-center"
                    @click="openFileUploader('passportPhotoUpload')"
                  >
                    <p>Click to upload</p>
                  </div>
                  <input
                    class="d-none"
                    type="file"
                    ref="passportPhotoUpload"
                    v-validate="'required'"
                    name="passport_photo"
                    @change="
                      fileUploaded('passportPhotoUpload', 'passport-image')
                    "
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.passport_photo')"
                    >{{ errors.first("step-2.passport_photo") }}</span
                  >
                </div>

                <div class="col-sm-3 mt-3">
                  <label for="">Bank Statement (PDF)</label>
                  <div
                    class="image--upload-section bank-statement text-center"
                    @click="openFileUploader('bankStatementUpload')"
                  >
                    <p>Click to upload</p>
                  </div>
                  <input
                    class="d-none"
                    accept="application/pdf"
                    type="file"
                    ref="bankStatementUpload"
                    v-validate="'required|mimes:application/pdf'"
                    name="bank_statement"
                    @change="
                      fileUploaded('bankStatementUpload', 'bank-statement')
                    "
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-2.bank_statement')"
                    >{{ errors.first("step-2.bank_statement") }}</span
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn cart-btn btn-normal btn-sm"
                @click="changeTab('prev')"
              >
                Prev
              </button>
              <button
                type="button"
                class="btn cart-btn btn-normal btn-sm"
                @click="changeTab('next')"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </tab-content>

      <tab-content
        title="EMI Information"
        class="mb-5"
        icon="bi bi-credit-card"
      >
        <div class="card">
          <div class="card-body">
            <form data-vv-scope="step-3">
              <div class="form-group row" v-if="productDetail.variants.length">
                <label for="">Which Variant?</label>
                <div class="col-sm-3" v-for="variant in productDetail.variants">
                  <input
                    @change="variantChanged(variant)"
                    type="radio"
                    name="product_variant"
                    v-validate="'required'"
                    v-model="emiData.product_attributes"
                    :value="variant.attributes"
                    :id="`product-variant-${variant.id}`"
                  />
                  <label :for="`product-variant-${variant.id}`">
                    <div class="product--variant">
                      <p v-for="(attribute, key) in variant.attributes">
                        {{ key }} : {{ attribute }}
                      </p>
                    </div>
                  </label>
                </div>
                <span
                  class="text-danger text-sm mt-1"
                  v-if="errors.has('step-3.product_variant')"
                  >{{ errors.first("step-3.product_variant") }}</span
                >
              </div>
              <div class="form-group row">
                <div class="col-sm-6 mt-3">
                  <label for="">Emi Mode (month)</label>
                  <select
                    name="emi_mode"
                    @change="calculateEmiPerMonth"
                    class="form-control field-emi-mode"
                    v-model="emiData.emi_mode"
                    v-validate="'required'"
                  >
                    <option value="">Select EMI Mode</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-3.emi_mode')"
                    >{{ errors.first("step-3.emi_mode") }}</span
                  >
                </div>
                <div class="col-sm-6 mt-3">
                  <label for="">Down Payment</label>
                  <input
                    type="text"
                    class="form-control"
                    @keyup="calculateEmiPerMonth"
                    name="down_payment"
                    v-model="emiData.down_payment"
                    v-validate="'required|numeric'"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-3.down_payment')"
                    >{{ errors.first("step-3.down_payment") }}</span
                  >
                </div>
                <div class="col-sm-6 mt-3">
                  <label for="">Finance Amount</label>
                  <input
                    type="text"
                    class="form-control"
                    name="finance_amount"
                    readonly
                    v-model="emiData.finance_amount"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-3.finance_amount')"
                    >{{ errors.first("step-3.finance_amount") }}</span
                  >
                </div>
                <div class="col-sm-6 mt-3">
                  <label for="">Emi Per Month</label>
                  <input
                    type="text"
                    class="form-control"
                    name="emi_per_month"
                    readonly
                    v-model="emiData.emi_per_month"
                  />
                  <span
                    class="text-danger text-sm mt-1"
                    v-if="errors.has('step-3.emi_per_month')"
                    >{{ errors.first("step-3.emi_per_month") }}</span
                  >
                </div>
              </div>

              <div class="form-group text-center">
                <label for="">
                  <input
                    type="checkbox"
                    v-model="emiData.down_payment_agreement"
                    id="down_payment_agreement"
                    required=""
                    name="down_payment_agreement"
                  />
                  <b>
                    I agree to pay downpayments &amp; Service Charged to Fatafat
                    Sewa office or their reprensetetive .
                  </b>
                </label>
              </div>

              <div class="form-group text-center">
                <label for="">
                  <input
                    v-model="emiData.emi_agreement"
                    type="checkbox"
                    id="emi_agreement"
                    required=""
                    name="emi_agreement"
                  />
                  <b
                    >I declare that the information I have provided above is
                    accurate and complete to the best of my knowledge. I
                    authorize <span class="bank--control-name">BANK NAME</span>,
                    Fatafat Sewa Pvt. Ltd. and its reprensetative to call or SMS
                    me with reference to my credit Card application.</b
                  >
                </label>
              </div>
            </form>
            <button
              type="button"
              class="btn cart-btn btn-normal btn-sm"
              @click="changeTab('prev')"
              :disabled="submitting_form"
            >
              Prev
            </button>
            <button
              type="button"
              class="btn cart-btn btn-normal btn-sm"
              @click="saveEmiApplication"
              :disabled="submitting_form"
            >
              {{
                submitting_form
                  ? "Submitting EMI Application..."
                  : "Submit Application"
              }}
            </button>
          </div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import NepaliDate from "nepali-date-converter";
import _ from "lodash";
export default {
  props: ["productDetail"],
  data() {
    return {
      emiData: {
        credit_card: "",
        emi_mode: "",
        down_payment: "",
        finance_amount: "",
        emi_per_month: "",
        product_id: this.productDetail.id,
        product_attributes: {},
      },
      banks: [],
      original_product_price: 0,
      submitting_form: false,

      card_error: false,
    };
  },
  mounted() {
    this.getBankLists();
    this.emiData.finance_amount = this.productDetail.price;
    this.original_product_price = this.productDetail.price;
    this.emiData.product_price = this.productDetail.price;
  },
  methods: {
    async getBankLists() {
      try {
        const res = await axios.get("/api/banks-list");
        this.banks = res.data.data;
      } catch (e) {
        console.log(e);
      }
    },

    validatePersonalInfo() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateBankInformation() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then((result) => {
          if (result) {
            if (this.emiData.credit_card === "1") {
              if (
                !this.emiData.card_holder_name ||
                !this.emiData.card_number ||
                !this.emiData.card_expiry_date
              ) {
                this.card_error = true;
                console.log("card error");
                reject("Correct all values");
              } else {
                this.card_error = false;
                resolve(true);
              }
            } else {
              this.card_error = false;
              resolve(true);
            }
          } else {
            reject("correct all values");
          }
        });
      });
    },

    async saveEmiApplication() {
      let result = await this.$validator.validateAll("step-3");
      if (!result) {
        return;
      }
      if (!this.emiData.down_payment_agreement || !this.emiData.emi_agreement) {
        Swal.fire({
          icon: "error",
          title: "Please accept both of the agreements",
        });
        return;
      }
      try {
        this.submitting_form = true;
        let payload = _.cloneDeep(this.emiData);

        if (this.emiData.product_attributes) {
          payload.product_attributes = JSON.stringify(
            payload.product_attributes
          );
        }

        if (
          this.$refs["salaryCertificateUpload"] &&
          this.$refs.salaryCertificateUpload.files[0]
        )
          payload.salary_certificate =
            this.$refs.salaryCertificateUpload.files[0];
        if (
          this.$refs["citizenshipUpload"] &&
          this.$refs.citizenshipUpload.files[0]
        )
          payload.citizenship = this.$refs.citizenshipUpload.files[0];

        if (
          this.$refs["passportPhotoUpload"] &&
          this.$refs.passportPhotoUpload.files[0]
        )
          payload.photo = this.$refs.passportPhotoUpload.files[0];

        if (
          this.$refs["bankStatementUpload"] &&
          this.$refs.bankStatementUpload.files[0]
        )
          payload.bank_statement = this.$refs.bankStatementUpload.files[0];

        let params = this.convertObjectToFormData(payload);

        let url = `/api/emi/post-application`;

        let response = await axios.post(url, params);
        if (response.data.success) {
          location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error while submitting EMI Application. Please retry !!",
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error while submitting EMI Application. Please retry !!",
        });
      } finally {
        this.submitting_form = false;
      }
    },

    changeTab(direction) {
      if (direction == "next") this.$refs.emiApplyWizard.nextTab();
      else this.$refs.emiApplyWizard.prevTab();
    },

    openFileUploader(ref) {
      this.$refs[ref].click();
    },

    fileUploaded(ref, class_) {
      let file = this.$refs[ref].files[0];
      let img_url = URL.createObjectURL(file);
      if (class_ == "bank-statement") {
        $("." + class_)
          .empty()
          .html(
            `<img src="/website/images/pdf-icon.png" style="width:80px !important"/>`
          );
        return;
      }
      $("." + class_)
        .empty()
        .html(`<img src="${img_url}" />`);
    },

    changeDate(current_format) {
      if (current_format === "ad") {
        let date_splited = this.emiData.dob_ad.split("-");
        let nepalidate = new NepaliDate(
          new Date(date_splited[0], date_splited[1], date_splited[2])
        ).getBS();
        let nepali_date_converted = `${nepalidate["year"]}-${(
          "0" + nepalidate["month"]
        ).slice(-2)}-${("0" + nepalidate["date"]).slice(-2)}`;
        this.emiData.dob_bs = nepali_date_converted;
      } else {
        let nepalidate = new NepaliDate(this.emiData.dob_bs).getAD();
        let nepali_date_converted = `${nepalidate["year"]}-${(
          "0" + nepalidate["month"]
        ).slice(-2)}-${("0" + nepalidate["date"]).slice(-2)}`;
        this.emiData.dob_ad = nepali_date_converted;
      }
    },

    variantChanged(variant) {
      this.emiData.finance_amount = variant.price;
      this.original_product_price = variant.price;
      this.emiData.product_price = variant.price;

      this.calculateEmiPerMonth();
    },

    calculateEmiPerMonth() {
      let product_price = this.original_product_price;
      let emi_mode = this.emiData.emi_mode;
      let down_payment = this.emiData.down_payment;

      if (down_payment) {
        let finance_amount = product_price - down_payment;
        this.emiData.finance_amount = finance_amount;
        if (emi_mode) {
          let emi_per_month = finance_amount / emi_mode;
          this.emiData.emi_per_month = emi_per_month.toFixed(2);
        }
      }
    },

    convertObjectToFormData(object) {
      let form_data = new FormData();
      for (let item in object) {
        if (object[item]) {
          form_data.append(item, object[item]);
        }
      }
      return form_data;
    },
  },
};
</script>

<style lang="scss" scoped>
.credit-card--input {
  .payment-title {
    width: 100%;
    text-align: center;
  }

  .form-container .field-container:first-of-type {
    grid-area: name;
  }

  .form-container .field-container:nth-of-type(2) {
    grid-area: number;
  }

  .form-container .field-container:nth-of-type(3) {
    grid-area: expiration;
  }

  .form-container .field-container:nth-of-type(4) {
    grid-area: security;
  }

  .field-container input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .field-container {
    position: relative;
  }

  .form-container {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto auto;
    grid-template-rows: 90px 90px 90px;
    grid-template-areas: "name name" "number number" "expiration security";
    max-width: 400px;
    padding: 20px;
    color: #707070;
  }

  // label {
  //   padding-bottom: 5px;
  //   font-size: 13px;
  // }

  input {
    margin-top: 3px;
    padding: 9px;
    font-size: 16px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
  }

  .ccicon {
    height: 38px;
    position: absolute;
    right: 6px;
    top: calc(50% - 17px);
    width: 60px;
  }

  /* CREDIT CARD IMAGE STYLING */
  .preload * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
  }

  .container {
    width: 100%;
    max-width: 400px;
    max-height: 251px;
    height: 54vw;
    padding: 20px;
  }

  #ccsingle {
    position: absolute;
    right: 15px;
    top: 20px;
  }

  #ccsingle svg {
    width: 100px;
    max-height: 60px;
  }

  .creditcard svg#cardfront,
  .creditcard svg#cardback {
    width: 100%;
    -webkit-box-shadow: 1px 5px 6px 0px black;
    box-shadow: 1px 5px 6px 0px black;
    border-radius: 22px;
  }

  #generatecard {
    cursor: pointer;
    float: right;
    font-size: 12px;
    color: #fff;
    padding: 2px 4px;
    background-color: #909090;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  /* CHANGEABLE CARD ELEMENTS */
  .creditcard .lightcolor,
  .creditcard .darkcolor {
    -webkit-transition: fill 0.5s;
    transition: fill 0.5s;
  }

  .creditcard .lightblue {
    fill: #03a9f4;
  }

  .creditcard .lightbluedark {
    fill: #0288d1;
  }

  .creditcard .red {
    fill: #ef5350;
  }

  .creditcard .reddark {
    fill: #d32f2f;
  }

  .creditcard .purple {
    fill: #ab47bc;
  }

  .creditcard .purpledark {
    fill: #7b1fa2;
  }

  .creditcard .cyan {
    fill: #26c6da;
  }

  .creditcard .cyandark {
    fill: #0097a7;
  }

  .creditcard .green {
    fill: #66bb6a;
  }

  .creditcard .greendark {
    fill: #388e3c;
  }

  .creditcard .lime {
    fill: #d4e157;
  }

  .creditcard .limedark {
    fill: #afb42b;
  }

  .creditcard .yellow {
    fill: #ffeb3b;
  }

  .creditcard .yellowdark {
    fill: #f9a825;
  }

  .creditcard .orange {
    fill: #ff9800;
  }

  .creditcard .orangedark {
    fill: #ef6c00;
  }

  .creditcard .grey {
    fill: #bdbdbd;
  }

  .creditcard .greydark {
    fill: #616161;
  }

  /* FRONT OF CARD */
  #svgname {
    text-transform: uppercase;
  }

  #cardfront .st2 {
    fill: #ffffff;
  }

  #cardfront .st3 {
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
  }

  #cardfront .st4 {
    font-size: 54.7817px;
  }

  #cardfront .st5 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
  }

  #cardfront .st6 {
    font-size: 33.1112px;
  }

  #cardfront .st7 {
    opacity: 0.6;
    fill: #ffffff;
  }

  #cardfront .st8 {
    font-size: 24px;
  }

  #cardfront .st9 {
    font-size: 36.5498px;
  }

  #cardfront .st10 {
    font-family: "Source Code Pro", monospace;
    font-weight: 300;
  }

  #cardfront .st11 {
    font-size: 16.1716px;
  }

  #cardfront .st12 {
    fill: #4c4c4c;
  }

  /* BACK OF CARD */
  #cardback .st0 {
    fill: none;
    stroke: #0f0f0f;
    stroke-miterlimit: 10;
  }

  #cardback .st2 {
    fill: #111111;
  }

  #cardback .st3 {
    fill: #f2f2f2;
  }

  #cardback .st4 {
    fill: #d8d2db;
  }

  #cardback .st5 {
    fill: #c4c4c4;
  }

  #cardback .st6 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
  }

  #cardback .st7 {
    font-size: 27px;
  }

  #cardback .st8 {
    opacity: 0.6;
  }

  #cardback .st9 {
    fill: #ffffff;
  }

  #cardback .st10 {
    font-size: 24px;
  }

  #cardback .st11 {
    fill: #eaeaea;
  }

  #cardback .st12 {
    font-family: "Rock Salt", cursive;
  }

  #cardback .st13 {
    font-size: 37.769px;
  }

  /* FLIP ANIMATION */
  .container {
    perspective: 1000px;
  }

  .creditcard {
    width: 100%;
    max-width: 400px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: -webkit-transform 0.6s;
    -webkit-transition: -webkit-transform 0.6s;
    transition: transform 0.6s;
    transition: transform 0.6s, -webkit-transform 0.6s;
    cursor: pointer;
  }

  .creditcard .front,
  .creditcard .back {
    // position: absolute;
    width: 100%;
    max-width: 400px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    color: #47525d;
  }

  .creditcard .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .creditcard.flipped {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
</style>