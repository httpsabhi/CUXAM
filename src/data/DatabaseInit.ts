import { Batches, PrismaClient, ITeacher } from '@prisma/client';
const prisma = new PrismaClient()

//section
const internal = JSON.parse('[{"Ccode":"22CSH-241","section":"22BCB1/A","Teacher":"E15868"},{"Ccode":"22CSH-242","section":"22BCB1/A","Teacher":"E15868"},{"Ccode":"22CSH-243","section":"22BCB1/A","Teacher":"E11567"},{"Ccode":"22CSH-244","section":"22BCB1/A","Teacher":"E11361"},{"Ccode":"22CSH-245","section":"22BCB1/A","Teacher":"E11486"},{"Ccode":"22CSH-241","section":"22BCB1/B","Teacher":"E15868"},{"Ccode":"22CSH-242","section":"22BCB1/B","Teacher":"E15868"},{"Ccode":"22CSH-243","section":"22BCB1/B","Teacher":"E11567"},{"Ccode":"22CSH-244","section":"22BCB1/B","Teacher":"E11361"},{"Ccode":"22CSH-245","section":"22BCB1/B","Teacher":"E11486"},{"Ccode":"22CSH-241","section":"22BCC1/A","Teacher":"E14961"},{"Ccode":"22CSH-242","section":"22BCC1/A","Teacher":"E12853"},{"Ccode":"22CSH-243","section":"22BCC1/A","Teacher":"E15565"},{"Ccode":"22CSH-244","section":"22BCC1/A","Teacher":"E15505"},{"Ccode":"22CSH-241","section":"22BCC1/B","Teacher":"E14961"},{"Ccode":"22CSH-242","section":"22BCC1/B","Teacher":"E12853"},{"Ccode":"22CSH-243","section":"22BCC1/B","Teacher":"E15565"},{"Ccode":"22CSH-244","section":"22BCC1/B","Teacher":"E14288"},{"Ccode":"22CSH-241","section":"22BCC2/A","Teacher":"E14961"},{"Ccode":"22CSH-242","section":"22BCC2/A","Teacher":"E15978"},{"Ccode":"22CSH-243","section":"22BCC2/A","Teacher":"E15565"},{"Ccode":"22CSH-244","section":"22BCC2/A","Teacher":"E15947"},{"Ccode":"22CSH-241","section":"22BCD1/A","Teacher":"E15505"},{"Ccode":"22CSH-242","section":"22BCD1/A","Teacher":"E15733"},{"Ccode":"22CSH-243","section":"22BCD1/A","Teacher":"E15565"},{"Ccode":"22CSH-244","section":"22BCD1/A","Teacher":"E15505"},{"Ccode":"22CSH-241","section":"22BCD1/B","Teacher":"E14961"},{"Ccode":"22CSH-242","section":"22BCD1/B","Teacher":"E15733"},{"Ccode":"22CSH-243","section":"22BCD1/B","Teacher":"E3040"},{"Ccode":"22CSH-244","section":"22BCD1/B","Teacher":"E15505"},{"Ccode":"22CSH-241","section":"22BCG1/A","Teacher":"E15134"},{"Ccode":"22CSH-242","section":"22BCG1/A","Teacher":"E15134"},{"Ccode":"22CSH-243","section":"22BCG1/A","Teacher":"E9758"},{"Ccode":"22CSH-244","section":"22BCG1/A","Teacher":"E11421"},{"Ccode":"22CSH-242","section":"22BCG1/B","Teacher":"E15134"},{"Ccode":"22CSH-241","section":"22BCG1/B","Teacher":"E15134"},{"Ccode":"22CSH-243","section":"22BCG1/B","Teacher":"E9758"},{"Ccode":"22CSH-244","section":"22BCG1/B","Teacher":"E11421"},{"Ccode":"22CSH-242","section":"22BDA1/A","Teacher":"E14277"},{"Ccode":"22CSH-244","section":"22BDA1/A","Teacher":"E15227"},{"Ccode":"22CSH-243","section":"22BDA1/A","Teacher":"E14118"},{"Ccode":"22CSH-241","section":"22BDA1/A","Teacher":"E15553"},{"Ccode":"22CSH-241","section":"22BDA1/B","Teacher":"E15553"},{"Ccode":"22CSH-242","section":"22BDA1/B","Teacher":"E14277"},{"Ccode":"22CSH-243","section":"22BDA1/B","Teacher":"E14118"},{"Ccode":"22CSH-244","section":"22BDA1/B","Teacher":"E15227"},{"Ccode":"22CSH-242","section":"22BDA2/A","Teacher":"E14277"},{"Ccode":"22CSH-244","section":"22BDA2/A","Teacher":"E15227"},{"Ccode":"22CSH-241","section":"22BDA2/A","Teacher":"E15737"},{"Ccode":"22CSH-243","section":"22BDA2/A","Teacher":"E14118"},{"Ccode":"22CSH-241","section":"22BDA2/B","Teacher":"E15737"},{"Ccode":"22CSH-242","section":"22BDA2/B","Teacher":"E14277"},{"Ccode":"22CSH-243","section":"22BDA2/B","Teacher":"E14871"},{"Ccode":"22CSH-244","section":"22BDA2/B","Teacher":"E15227"},{"Ccode":"22CSH-241","section":"22BIS1/A","Teacher":"E11567"},{"Ccode":"22CSH-244","section":"22BIS1/A","Teacher":"E11361"},{"Ccode":"22CSH-242","section":"22BIS1/A","Teacher":"E16106"},{"Ccode":"22CSH-243","section":"22BIS1/A","Teacher":"E15868"},{"Ccode":"22CSH-241","section":"22BIS1/B","Teacher":"E11567"},{"Ccode":"22CSH-242","section":"22BIS1/B","Teacher":"E16106"},{"Ccode":"22CSH-243","section":"22BIS1/B","Teacher":"E15868"},{"Ccode":"22CSH-244","section":"22BIS1/B","Teacher":"E11361"},{"Ccode":"22CSH-243","section":"22BIS2/A","Teacher":"E11567"},{"Ccode":"22CSH-241","section":"22BIS2/A","Teacher":"E15862"},{"Ccode":"22CSH-244","section":"22BIS2/A","Teacher":"E12652"},{"Ccode":"22CSH-242","section":"22BIS2/A","Teacher":"E16106"},{"Ccode":"22CSH-241","section":"22BIS2/B","Teacher":"E15862"},{"Ccode":"22CSH-242","section":"22BIS2/B","Teacher":"E16106"},{"Ccode":"22CSH-243","section":"22BIS2/B","Teacher":"E11567"},{"Ccode":"22CSH-244","section":"22BIS2/B","Teacher":"E12652"},{"Ccode":"22CSH-241","section":"22BIT1/A","Teacher":"E13349"},{"Ccode":"22CSH-242","section":"22BIT1/A","Teacher":"E15792"},{"Ccode":"22CSH-243","section":"22BIT1/A","Teacher":"E13693"},{"Ccode":"22CSH-244","section":"22BIT1/A","Teacher":"E15792"},{"Ccode":"22CSH-241","section":"22BIT1/B","Teacher":"E13349"},{"Ccode":"22CSH-242","section":"22BIT1/B","Teacher":"E15792"},{"Ccode":"22CSH-243","section":"22BIT1/B","Teacher":"E13693"},{"Ccode":"22CSH-244","section":"22BIT1/B","Teacher":"E15792"},{"Ccode":"22CSH-239","section":"22CBS1/A","Teacher":"E13431"},{"Ccode":"22CSH-246","section":"22CBS1/A","Teacher":"E11253"},{"Ccode":"22CSH-234","section":"22CBS1/","Teacher":"E13431"},{"Ccode":"22CSH-241","section":"22AML1/A","Teacher":"E15783"},{"Ccode":"22CSH-241","section":"22AML3/A","Teacher":"E13365"},{"Ccode":"22CSH-241","section":"22AML5/A","Teacher":"E13845"},{"Ccode":"22CSH-241","section":"22AML7/A","Teacher":"E11286"},{"Ccode":"22CSH-241","section":"22AML9/A","Teacher":"E15791"},{"Ccode":"22CSH-243","section":"22AML11/A","Teacher":"E13851"},{"Ccode":"22CSH-241","section":"22AML11/B","Teacher":"E11286"},{"Ccode":"22CSH-242","section":"22AML1/B","Teacher":"E9758"},{"Ccode":"22CSH-242","section":"22AML3/B","Teacher":"E15060"},{"Ccode":"22CSH-242","section":"22AML5/B","Teacher":"E16323"},{"Ccode":"22CSH-242","section":"22AML7/B","Teacher":"E16189"},{"Ccode":"22CSH-242","section":"22AML9/B","Teacher":"E9758"},{"Ccode":"22CSH-243","section":"22AML2/A","Teacher":"E16298"},{"Ccode":"22CSH-243","section":"22AML4/A","Teacher":"E12800"},{"Ccode":"22CSH-243","section":"22AML6/A","Teacher":"E13464"},{"Ccode":"22CSH-243","section":"22AML8/A","Teacher":"E13851"},{"Ccode":"22CSH-243","section":"22AML10/A","Teacher":"E13122"},{"Ccode":"22CSH-244","section":"22AML2/B","Teacher":"E13465"},{"Ccode":"22CSH-244","section":"22AML4/B","Teacher":"E13548"},{"Ccode":"22CSH-244","section":"22AML6/B","Teacher":"E15372"},{"Ccode":"22CSH-244","section":"22AML8/B","Teacher":"E16302"},{"Ccode":"22CSH-244","section":"22AML10/B","Teacher":"E15400"},{"Ccode":"22CSH-242","section":"22AML1/A","Teacher":"E9758"},{"Ccode":"22CSH-242","section":"22AML3/A","Teacher":"E15060"},{"Ccode":"22CSH-242","section":"22AML5/A","Teacher":"E15400"},{"Ccode":"22CSH-242","section":"22AML7/A","Teacher":"E16189"},{"Ccode":"22CSH-242","section":"22AML9/A","Teacher":"E16323"},{"Ccode":"22CSH-243","section":"22AML1/B","Teacher":"E16298"},{"Ccode":"22CSH-243","section":"22AML3/B","Teacher":"E12800"},{"Ccode":"22CSH-243","section":"22AML5/B","Teacher":"E13464"},{"Ccode":"22CSH-243","section":"22AML7/B","Teacher":"E13851"},{"Ccode":"22CSH-243","section":"22AML9/B","Teacher":"E13122"},{"Ccode":"22CSH-244","section":"22AML2/A","Teacher":"E13465"},{"Ccode":"22CSH-244","section":"22AML4/A","Teacher":"E13548"},{"Ccode":"22CSH-244","section":"22AML6/A","Teacher":"E12652"},{"Ccode":"22CSH-244","section":"22AML8/A","Teacher":"E16302"},{"Ccode":"22CSH-244","section":"22AML10/A","Teacher":"E15400"},{"Ccode":"22CSH-241","section":"22AML11/A","Teacher":"E15506"},{"Ccode":"22CSH-241","section":"22AML2/B","Teacher":"E15783"},{"Ccode":"22CSH-241","section":"22AML4/B","Teacher":"E13845"},{"Ccode":"22CSH-241","section":"22AML6/B","Teacher":"E13845"},{"Ccode":"22CSH-241","section":"22AML8/B","Teacher":"E11286"},{"Ccode":"22CSH-241","section":"22AML10/B","Teacher":"E15791"},{"Ccode":"22CSH-243","section":"22AML11/B","Teacher":"E8042"},{"Ccode":"22CSH-243","section":"22AML1/A","Teacher":"E16298"},{"Ccode":"22CSH-243","section":"22AML3/A","Teacher":"E12800"},{"Ccode":"22CSH-243","section":"22AML5/A","Teacher":"E13464"},{"Ccode":"22CSH-243","section":"22AML7/A","Teacher":"E13851"},{"Ccode":"22CSH-243","section":"22AML9/A","Teacher":"E13122"},{"Ccode":"22CSH-244","section":"22AML1/B","Teacher":"E13465"},{"Ccode":"22CSH-244","section":"22AML3/B","Teacher":"E13548"},{"Ccode":"22CSH-244","section":"22AML5/B","Teacher":"E15372"},{"Ccode":"22CSH-244","section":"22AML7/B","Teacher":"E15063"},{"Ccode":"22CSH-244","section":"22AML9/B","Teacher":"E8752"},{"Ccode":"22CSH-241","section":"22AML2/A","Teacher":"E15134"},{"Ccode":"22CSH-242","section":"22AML4/A","Teacher":"E11286"},{"Ccode":"22CSH-241","section":"22AML6/A","Teacher":"E13845"},{"Ccode":"22CSH-241","section":"22AML8/A","Teacher":"E16227"},{"Ccode":"22CSH-241","section":"22AML10/A","Teacher":"E15791"},{"Ccode":"22CSH-242","section":"22AML2/B","Teacher":"E9758"},{"Ccode":"22CSH-242","section":"22AML4/B","Teacher":"E15060"},{"Ccode":"22CSH-242","section":"22AML6/B","Teacher":"E16189"},{"Ccode":"22CSH-242","section":"22AML8/B","Teacher":"E16189"},{"Ccode":"22CSH-242","section":"22AML10/B","Teacher":"E15190"},{"Ccode":"22CSH-244","section":"22AML1/A","Teacher":"E13465"},{"Ccode":"22CSH-244","section":"22AML3/A","Teacher":"E13548"},{"Ccode":"22CSH-244","section":"22AML5/A","Teacher":"E12652"},{"Ccode":"22CSH-244","section":"22AML7/A","Teacher":"E13548"},{"Ccode":"22CSH-244","section":"22AML9/A","Teacher":"E13548"},{"Ccode":"22CSH-241","section":"22AML1/B","Teacher":"E15783"},{"Ccode":"22CSH-241","section":"22AML3/B","Teacher":"E13365"},{"Ccode":"22CSH-241","section":"22AML5/B","Teacher":"E13845"},{"Ccode":"22CSH-241","section":"22AML7/B","Teacher":"E11286"},{"Ccode":"22CSH-241","section":"22AML9/B","Teacher":"E15791"},{"Ccode":"22CSH-242","section":"22AML2/A","Teacher":"E9758"},{"Ccode":"22CSH-241","section":"22AML4/A","Teacher":"E14950"},{"Ccode":"22CSH-242","section":"22AML6/A","Teacher":"E16323"},{"Ccode":"22CSH-242","section":"22AML8/A","Teacher":"E16189"},{"Ccode":"22CSH-242","section":"22AML10/A","Teacher":"E15190"},{"Ccode":"22CSH-243","section":"22AML2/B","Teacher":"E16298"},{"Ccode":"22CSH-243","section":"22AML4/B","Teacher":"E13464"},{"Ccode":"22CSH-243","section":"22AML6/B","Teacher":"E13464"},{"Ccode":"22CSH-243","section":"22AML8/B","Teacher":"E13851"},{"Ccode":"22CSH-243","section":"22AML10/B","Teacher":"E13122"},{"Ccode":"22CSH-244","section":"22AML11/B","Teacher":"E15400"},{"Ccode":"22CSH-242","section":"22AML11/B","Teacher":"E15190"},{"Ccode":"22CSH-242","section":"22AML11/A","Teacher":"E15190"},{"Ccode":"22CSH-244","section":"22AML11/A","Teacher":"E15400"},{"Ccode":"21CSH-335","section":"21AML7/A","Teacher":"E13828"},{"Ccode":"21CSP-343","section":"21AML7/A","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML7/A","Teacher":"E13618"},{"Ccode":"21CSH-345","section":"21AML7/A","Teacher":"E14496"},{"Ccode":"21CSH-334","section":"21AML7/A","Teacher":"E13248"},{"Ccode":"21CSH-335","section":"21AML7/B","Teacher":"E13828"},{"Ccode":"21CSP-343","section":"21AML7/B","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML7/B","Teacher":"E13618"},{"Ccode":"21CSH-345","section":"21AML7/B","Teacher":"E14496"},{"Ccode":"21CSH-334","section":"21AML7/B","Teacher":"E13248"},{"Ccode":"21CSH-335","section":"21AML8/A","Teacher":"E13828"},{"Ccode":"21CSP-343","section":"21AML8/A","Teacher":"E16302"},{"Ccode":"21CSH-346","section":"21AML8/A","Teacher":"E13618"},{"Ccode":"21CSH-345","section":"21AML8/A","Teacher":"E13868"},{"Ccode":"21CSH-334","section":"21AML8/A","Teacher":"E13248"},{"Ccode":"21CSH-335","section":"21AML8/B","Teacher":"E15060"},{"Ccode":"21CSH-345","section":"21AML8/B","Teacher":"E13868"},{"Ccode":"21CSP-343","section":"21AML8/B","Teacher":"E16302"},{"Ccode":"21CSH-346","section":"21AML8/B","Teacher":"E13618"},{"Ccode":"21CSH-334","section":"21AML8/B","Teacher":"E13365"},{"Ccode":"21CSH-335","section":"21AML9/A","Teacher":"E15063"},{"Ccode":"21CSP-343","section":"21AML9/A","Teacher":"E14621"},{"Ccode":"21CSH-346","section":"21AML9/A","Teacher":"E13038"},{"Ccode":"21CSH-345","section":"21AML9/A","Teacher":"E12849"},{"Ccode":"21CSH-334","section":"21AML9/A","Teacher":"E11286"},{"Ccode":"21CSH-335","section":"21AML9/B","Teacher":"E9836"},{"Ccode":"21CSH-345","section":"21AML9/B","Teacher":"E15380"},{"Ccode":"21CSP-343","section":"21AML9/B","Teacher":"E14621"},{"Ccode":"21CSH-346","section":"21AML9/B","Teacher":"E13038"},{"Ccode":"21CSH-334","section":"21AML9/B","Teacher":"E13142"},{"Ccode":"21CSH-346","section":"21AML10/A","Teacher":"E13038"},{"Ccode":"21CSH-335","section":"21AML10/A","Teacher":"E15063"},{"Ccode":"21CSP-343","section":"21AML10/A","Teacher":"E14621"},{"Ccode":"21CSH-345","section":"21AML10/A","Teacher":"E12849"},{"Ccode":"21CSH-334","section":"21AML10/A","Teacher":"E14422"},{"Ccode":"21CSH-335","section":"21AML10/B","Teacher":"E16227"},{"Ccode":"21CSP-343","section":"21AML10/B","Teacher":"E14621"},{"Ccode":"21CSH-346","section":"21AML10/B","Teacher":"E12903"},{"Ccode":"21CSH-345","section":"21AML10/B","Teacher":"E12849"},{"Ccode":"21CSH-334","section":"21AML10/B","Teacher":"E14422"},{"Ccode":"21CSH-345","section":"21AML11/A","Teacher":"E12849"},{"Ccode":"21CSH-335","section":"21AML11/A","Teacher":"E15123"},{"Ccode":"21CSP-343","section":"21AML11/A","Teacher":"E14621"},{"Ccode":"21CSH-346","section":"21AML11/A","Teacher":"E9758"},{"Ccode":"21CSH-334","section":"21AML11/A","Teacher":"E13987"},{"Ccode":"21CSH-345","section":"21AML11/B","Teacher":"E12849"},{"Ccode":"21CSH-335","section":"21AML11/B","Teacher":"E15123"},{"Ccode":"21CSP-343","section":"21AML11/B","Teacher":"E14621"},{"Ccode":"21CSH-346","section":"21AML11/B","Teacher":"E9758"},{"Ccode":"21CSH-334","section":"21AML11/B","Teacher":"E13987"},{"Ccode":"21CSH-335","section":"21AML12/A","Teacher":"E15786"},{"Ccode":"21CSH-346","section":"21AML12/A","Teacher":"E16159"},{"Ccode":"21CSP-343","section":"21AML12/A","Teacher":"E9758"},{"Ccode":"21CSH-345","section":"21AML12/A","Teacher":"E12849"},{"Ccode":"21CSH-334","section":"21AML12/A","Teacher":"E11286"},{"Ccode":"21CSH-335","section":"21AML12/B","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML12/B","Teacher":"E9758"},{"Ccode":"21CSH-345","section":"21AML12/B","Teacher":"E16227"},{"Ccode":"21CSH-346","section":"21AML12/B","Teacher":"E16159"},{"Ccode":"21CSH-334","section":"21AML12/B","Teacher":"E13248"},{"Ccode":"21CSH-325","section":"21CBS1/A","Teacher":"E13244"},{"Ccode":"21CSH-326","section":"21CBS1/A","Teacher":"E10488"},{"Ccode":"21CSH-324","section":"21CBS1/A","Teacher":"E11253"},{"Ccode":"21CSH-325","section":"21CBS1/B","Teacher":"E13244"},{"Ccode":"21CSH-326","section":"21CBS1/B","Teacher":"E10488"},{"Ccode":"21CSH-324","section":"21CBS1/B","Teacher":"E10488"},{"Ccode":"21CSH-335","section":"21AML1/A","Teacher":"E15978"},{"Ccode":"21CSP-343","section":"21AML1/A","Teacher":"E13419"},{"Ccode":"21CSH-346","section":"21AML1/A","Teacher":"E12903"},{"Ccode":"21CSH-345","section":"21AML1/A","Teacher":"E14380"},{"Ccode":"21CSH-334","section":"21AML1/A","Teacher":"E13987"},{"Ccode":"21CSH-335","section":"21AML1/B","Teacher":"E15783"},{"Ccode":"21CSP-343","section":"21AML1/B","Teacher":"E13419"},{"Ccode":"21CSH-346","section":"21AML1/B","Teacher":"E12903"},{"Ccode":"21CSH-345","section":"21AML1/B","Teacher":"E14380"},{"Ccode":"21CSH-334","section":"21AML1/B","Teacher":"E13987"},{"Ccode":"21CSH-335","section":"21AML2/A","Teacher":"E15786"},{"Ccode":"21CSP-343","section":"21AML2/A","Teacher":"E10488"},{"Ccode":"21CSH-346","section":"21AML2/A","Teacher":"E1172"},{"Ccode":"21CSH-345","section":"21AML2/A","Teacher":"E16227"},{"Ccode":"21CSH-334","section":"21AML2/A","Teacher":"E13987"},{"Ccode":"21CSH-335","section":"21AML2/B","Teacher":"E15786"},{"Ccode":"21CSP-343","section":"21AML2/B","Teacher":"E13419"},{"Ccode":"21CSH-346","section":"21AML2/B","Teacher":"E1172"},{"Ccode":"21CSH-345","section":"21AML2/B","Teacher":"E16227"},{"Ccode":"21CSH-334","section":"21AML2/B","Teacher":"E13987"},{"Ccode":"21CSH-335","section":"21AML3/A","Teacher":"E13263"},{"Ccode":"21CSP-343","section":"21AML3/A","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML3/A","Teacher":"E16159"},{"Ccode":"21CSH-345","section":"21AML3/A","Teacher":"E15380"},{"Ccode":"21CSH-334","section":"21AML3/A","Teacher":"E11201"},{"Ccode":"21CSH-335","section":"21AML3/B","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML3/B","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML3/B","Teacher":"E12903"},{"Ccode":"21CSH-345","section":"21AML3/B","Teacher":"E15380"},{"Ccode":"21CSH-334","section":"21AML3/B","Teacher":"E11201"},{"Ccode":"21CSH-335","section":"21AML4/A","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML4/A","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML4/A","Teacher":"E15506"},{"Ccode":"21CSH-345","section":"21AML4/A","Teacher":"E15380"},{"Ccode":"21CSH-334","section":"21AML4/A","Teacher":"E11201"},{"Ccode":"21CSH-335","section":"21AML4/B","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML4/B","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML4/B","Teacher":"E15506"},{"Ccode":"21CSH-345","section":"21AML4/B","Teacher":"E15380"},{"Ccode":"21CSH-345","section":"21AML5/A","Teacher":"E14496"},{"Ccode":"21CSH-345","section":"21AML5/B","Teacher":"E14496"},{"Ccode":"21CSH-345","section":"21AML6/A","Teacher":"E13868"},{"Ccode":"21CSH-345","section":"21AML6/B","Teacher":"E13868"},{"Ccode":"21CSH-334","section":"21AML6/A","Teacher":"E14422"},{"Ccode":"21CSH-334","section":"21AML6/B","Teacher":"E14422"},{"Ccode":"21CSH-334","section":"21AML4/B","Teacher":"E11201"},{"Ccode":"21CSH-327","section":"21BCG1/A","Teacher":"E11421"},{"Ccode":"21CSH-327","section":"21BCG1/B","Teacher":"E11421"},{"Ccode":"21CSH-328","section":"21BCG1/A","Teacher":"E11421"},{"Ccode":"21CSH-328","section":"21BCG1/B","Teacher":"E11421"},{"Ccode":"21CSH-335","section":"21AML6/A","Teacher":"E15063"},{"Ccode":"21CSH-335","section":"21AML6/B","Teacher":"E15063"},{"Ccode":"21CSH-335","section":"21BCG1/A","Teacher":"E9758"},{"Ccode":"21CSH-335","section":"21BCG1/B","Teacher":"E9758"},{"Ccode":"21CSH-346","section":"21AML6/A","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML6/A","Teacher":"E13419"},{"Ccode":"21CSP-343","section":"21AML6/B","Teacher":"E13419"},{"Ccode":"21CSP-343","section":"21AML5/A","Teacher":"E16302"},{"Ccode":"21CSP-343","section":"21AML5/B","Teacher":"E16302"},{"Ccode":"21CSH-329","section":"21BCG1/A","Teacher":"E11606"},{"Ccode":"21CSH-329","section":"21BCG1/B","Teacher":"E11606"},{"Ccode":"21CSH-346","section":"21AML6/B","Teacher":"E1172"},{"Ccode":"21CSH-334","section":"21AML5/A","Teacher":"E11286"},{"Ccode":"21CSH-334","section":"21AML5/B","Teacher":"E11286"},{"Ccode":"21CSH-335","section":"21AML5/A","Teacher":"E15786"},{"Ccode":"21CSH-335","section":"21AML5/B","Teacher":"E15786"},{"Ccode":"21CSH-346","section":"21AML5/A","Teacher":"E15506"},{"Ccode":"21CSH-346","section":"21AML5/B","Teacher":"E15506"},{"Ccode":"21CSH-334","section":"21BDA1/A","Teacher":"E12791"},{"Ccode":"21CSH-350","section":"21BDA1/A","Teacher":"E16069"},{"Ccode":"21CSH-335","section":"21BDA1/A","Teacher":"E9836"},{"Ccode":"21CSH-340","section":"21BDA1/A","Teacher":"E15737"},{"Ccode":"21CSH-334","section":"21BDA1/B","Teacher":"E12791"},{"Ccode":"21CSH-350","section":"21BDA1/B","Teacher":"E16069"},{"Ccode":"21CSH-335","section":"21BDA1/B","Teacher":"E9836"},{"Ccode":"21CSH-340","section":"21BDA1/B","Teacher":"E15737"},{"Ccode":"21CSH-334","section":"21BDA2/A","Teacher":"E12791"},{"Ccode":"21CSH-350","section":"21BDA2/A","Teacher":"E16069"},{"Ccode":"21CSH-335","section":"21BDA2/A","Teacher":"E9836"},{"Ccode":"21CSH-340","section":"21BDA2/A","Teacher":"E15737"},{"Ccode":"21CSH-334","section":"21BDA2/B","Teacher":"E12791"},{"Ccode":"21CSH-350","section":"21BDA2/B","Teacher":"E16069"},{"Ccode":"21CSH-335","section":"21BDA2/B","Teacher":"E9836"},{"Ccode":"21CSH-340","section":"21BDA2/B","Teacher":"E15737"},{"Ccode":"21CSH-341","section":"21BCB1/A","Teacher":"E16106"},{"Ccode":"21CSH-343","section":"21BCB1/A","Teacher":"E15433"},{"Ccode":"21CSH-341","section":"21BCB1/B","Teacher":"E16106"},{"Ccode":"21CSH-343","section":"21BCB1/B","Teacher":"E15433"},{"Ccode":"21CSH-332","section":"21BCC1/A","Teacher":"E13420"},{"Ccode":"21CSH-333","section":"21BCC1/A","Teacher":"E14308"},{"Ccode":"21CSH-331","section":"21BCC1/A","Teacher":"E15733"},{"Ccode":"21CSH-335","section":"21BCC1/A","Teacher":"E15007"},{"Ccode":"21CSH-332","section":"21BCC1/B","Teacher":"E13420"},{"Ccode":"21CSH-333","section":"21BCC1/B","Teacher":"E14308"},{"Ccode":"21CSH-331","section":"21BCC1/B","Teacher":"E15733"},{"Ccode":"21CSH-335","section":"21BCC1/B","Teacher":"E15007"},{"Ccode":"21CSH-332","section":"21BCC2/A","Teacher":"E13420"},{"Ccode":"21CSH-333","section":"21BCC2/A","Teacher":"E14308"},{"Ccode":"21CSH-331","section":"21BCC2/A","Teacher":"E15733"},{"Ccode":"21CSH-335","section":"21BCC2/A","Teacher":"E15007"},{"Ccode":"21CSH-332","section":"21BCC2/B","Teacher":"E13420"},{"Ccode":"21CSH-333","section":"21BCC2/B","Teacher":"E14308"},{"Ccode":"21CSH-331","section":"21BCC2/B","Teacher":"E15733"},{"Ccode":"21CSH-335","section":"21BCC2/B","Teacher":"E15007"},{"Ccode":"21CSH-333","section":"21BCD1/A","Teacher":"E12853"},{"Ccode":"21CSH-335","section":"21BCD1/A","Teacher":"E14288"},{"Ccode":"21CSH-349","section":"21BCD1/A","Teacher":"E3040"},{"Ccode":"21CSH-343","section":"21BIS1/A","Teacher":"E15888"},{"Ccode":"21CSH-336","section":"21BIS1/A","Teacher":"E12833"},{"Ccode":"21CSH-348","section":"21BIS1/A","Teacher":"E13017"},{"Ccode":"21CSH-335","section":"21BIS1/A","Teacher":"E15862"},{"Ccode":"21CSH-347","section":"21BIS1/A","Teacher":"E9842"},{"Ccode":"21CSH-343","section":"21BIS1/B","Teacher":"E15888"},{"Ccode":"21CSH-336","section":"21BIS1/B","Teacher":"E12833"},{"Ccode":"21CSH-348","section":"21BIS1/B","Teacher":"E13017"},{"Ccode":"21CSH-335","section":"21BIS1/B","Teacher":"E15862"},{"Ccode":"21CSH-347","section":"21BIS1/B","Teacher":"E9842"},{"Ccode":"21CSH-343","section":"21BIS2/A","Teacher":"E15433"},{"Ccode":"21CSH-347","section":"21BIS2/A","Teacher":"E13017"},{"Ccode":"21CSH-336","section":"21BIS2/A","Teacher":"E12833"},{"Ccode":"21CSH-335","section":"21BIS2/A","Teacher":"E11486"},{"Ccode":"21CSH-348","section":"21BIS2/A","Teacher":"E13017"},{"Ccode":"21CSH-343","section":"21BIS2/B","Teacher":"E15433"},{"Ccode":"21CSH-347","section":"21BIS2/B","Teacher":"E13017"},{"Ccode":"21CSH-348","section":"21BIS2/B","Teacher":"E13017"},{"Ccode":"21CSH-335","section":"21BIS2/B","Teacher":"E11486"},{"Ccode":"21CSH-336","section":"21BIS2/B","Teacher":"E12833"},{"Ccode":"21CSH-330","section":"21BIT1/A","Teacher":"E9191"},{"Ccode":"21CSH-342","section":"21BIT1/A","Teacher":"E13349"},{"Ccode":"21CSP-334","section":"21BIT1/A","Teacher":"E9610"},{"Ccode":"21CSH-335","section":"21BIT1/A","Teacher":"E1326"},{"Ccode":"21CSH-330","section":"21BIT1/B","Teacher":"E9191"},{"Ccode":"21CSH-342","section":"21BIT1/B","Teacher":"E13349"},{"Ccode":"21CSP-334","section":"21BIT1/B","Teacher":"E9610"},{"Ccode":"21CSH-335","section":"21BIT1/B","Teacher":"E1326"},{"Ccode":"20CSP-438","section":"20BCC1/A","Teacher":"E15947"},{"Ccode":"20CSP-441","section":"20BCC1/A","Teacher":"E16323"},{"Ccode":"20CSP-438","section":"20BCC1/B","Teacher":"E15947"},{"Ccode":"20CSP-441","section":"20BCC1/B","Teacher":"E16323"},{"Ccode":"20CSB-433","section":"20BIS1/A","Teacher":"E8466"},{"Ccode":"20CSP-432","section":"20BIS1/A","Teacher":"E14425"},{"Ccode":"20CSB-436","section":"20BIS1/B","Teacher":"E9842"},{"Ccode":"20CSB-433","section":"20BIS2/A","Teacher":"E15888"},{"Ccode":"20CSB-436","section":"20BIS2/A","Teacher":"E9842"},{"Ccode":"20CSP-432","section":"20BIS2/B","Teacher":"E14425"},{"Ccode":"20CSC-431","section":"20BDA1/A","Teacher":"E13432"},{"Ccode":"20CSC-431","section":"20BDA3/A","Teacher":"E13432"},{"Ccode":"20CSP-433","section":"20BDA3/B","Teacher":"E13236"},{"Ccode":"20CSP-436","section":"20AML3/A","Teacher":"E15190"},{"Ccode":"20CSP-436","section":"20AML3/B","Teacher":"E13122"},{"Ccode":"20CSF-431","section":"20AML3/A","Teacher":"E11296"},{"Ccode":"20CSF-431","section":"20AML3/B","Teacher":"E11296"},{"Ccode":"20CSA-431","section":"20BCC1/A","Teacher":"E14960"},{"Ccode":"20CSA-431","section":"20BCC1/B","Teacher":"E14960"},{"Ccode":"20CSP-438","section":"20BCC2/A","Teacher":"E15947"},{"Ccode":"20CSP-441","section":"20BCC2/A","Teacher":"E16323"},{"Ccode":"20CSP-438","section":"20BCC2/B","Teacher":"E15947"},{"Ccode":"20CSP-441","section":"20BCC2/B","Teacher":"E16323"},{"Ccode":"20CSB-436","section":"20BIS1/A","Teacher":"E9842"},{"Ccode":"20CSP-432","section":"20BIS1/B","Teacher":"E14425"},{"Ccode":"20CSB-433","section":"20BIS2/B","Teacher":"E15888"},{"Ccode":"20CSB-436","section":"20BIS2/B","Teacher":"E9842"},{"Ccode":"20CSP-433","section":"20BDA1/A","Teacher":"E13236"},{"Ccode":"20CSC-431","section":"20BDA1/B","Teacher":"E13432"},{"Ccode":"20CSC-431","section":"20BDA2/B","Teacher":"E13432"},{"Ccode":"20CSP-433","section":"20BDA3/A","Teacher":"E13236"},{"Ccode":"20CSC-431","section":"20BDA3/B","Teacher":"E14871"},{"Ccode":"20CSP-433","section":"20BDA4/A","Teacher":"E13236"},{"Ccode":"20CSP-436","section":"20AML4/A","Teacher":"E11201"},{"Ccode":"20CSP-436","section":"20AML4/B","Teacher":"E11201"},{"Ccode":"20CSF-431","section":"20AML4/A","Teacher":"E13485"},{"Ccode":"20CSF-431","section":"20AML4/B","Teacher":"E13485"},{"Ccode":"20CSP-436","section":"20BIT1/A","Teacher":"E13693"},{"Ccode":"20CSD-431","section":"20BIT1/A","Teacher":"E9610"},{"Ccode":"20CSP-434","section":"20BCG1/A","Teacher":"E12224"},{"Ccode":"20CSG-432","section":"20BCG1/A","Teacher":"E12224"},{"Ccode":"20CSA-431","section":"20BCC2/A","Teacher":"E14960"},{"Ccode":"20CSA-431","section":"20BCC2/B","Teacher":"E14960"},{"Ccode":"20CSB-433","section":"20BIS1/B","Teacher":"E15888"},{"Ccode":"20CSP-432","section":"20BIS2/A","Teacher":"E14425"},{"Ccode":"20CSP-433","section":"20BDA1/B","Teacher":"E12791"},{"Ccode":"20CSP-433","section":"20BDA2/A","Teacher":"E13236"},{"Ccode":"20CSC-431","section":"20BDA2/A","Teacher":"E13432"},{"Ccode":"20CSP-433","section":"20BDA2/B","Teacher":"E13236"},{"Ccode":"20CSC-431","section":"20BDA4/A","Teacher":"E14871"},{"Ccode":"20CSP-433","section":"20BDA4/B","Teacher":"E13236"},{"Ccode":"20CSP-436","section":"20AML1/A","Teacher":"E15857"},{"Ccode":"20CSF-431","section":"20AML1/A","Teacher":"E8741"},{"Ccode":"20CSP-436","section":"20AML2/B","Teacher":"E8042"},{"Ccode":"20CSF-431","section":"20AML2/A","Teacher":"E11296"},{"Ccode":"20CSF-431","section":"20AML2/B","Teacher":"E11296"},{"Ccode":"20CSP-436","section":"20AML5/A","Teacher":"E15857"},{"Ccode":"20CSP-436","section":"20AML5/B","Teacher":"E15857"},{"Ccode":"20CSF-431","section":"20AML5/A","Teacher":"E13365"},{"Ccode":"20CSF-431","section":"20AML5/B","Teacher":"E13485"},{"Ccode":"20CSP-434","section":"20BCG1/B","Teacher":"E11606"},{"Ccode":"20CSG-432","section":"20BCG1/B","Teacher":"E12224"},{"Ccode":"20CSP-449","section":"20CBS1/B","Teacher":"E13431"},{"Ccode":"20CSJ-436","section":"20CBS1/B","Teacher":"E10488"},{"Ccode":"20CSC-431","section":"20BDA4/B","Teacher":"E14871"},{"Ccode":"20CSP-436","section":"20AML1/B","Teacher":"E15857"},{"Ccode":"20CSF-431","section":"20AML1/B","Teacher":"E15783"},{"Ccode":"20CSP-436","section":"20AML2/A","Teacher":"E8042"},{"Ccode":"20CSP-436","section":"20AML6/A","Teacher":"E11201"},{"Ccode":"20CSP-436","section":"20AML6/B","Teacher":"E11201"},{"Ccode":"20CSF-431","section":"20AML6/A","Teacher":"E13485"},{"Ccode":"20CSF-431","section":"20AML6/B","Teacher":"E16227"},{"Ccode":"20CSP-444","section":"20CBS1/A","Teacher":"E10051"},{"Ccode":"20CSP-449","section":"20CBS1/A","Teacher":"E13431"},{"Ccode":"20CSJ-436","section":"20CBS1/A","Teacher":"E10488"},{"Ccode":"20CSP-444","section":"20CBS1/B","Teacher":"E10051"},{"Ccode":"20CSP-436","section":"20BIT1/B","Teacher":"E13693"},{"Ccode":"20CSD-431","section":"20BIT1/B","Teacher":"E9610"},{"Ccode":"21CSH-335","section":"Kargil1/A","Teacher":"E15978"},{"Ccode":"21CSH-346","section":"21AML6/A","Teacher":"E9758"},{"Ccode":"21CSP-343","section":"21AML2/B","Teacher":"E13419"},{"Ccode":"21CSH-334","section":"21AML3/B","Teacher":"E11201"},{"Ccode":"21CSP-343","section":"21AML7/B","Teacher":"E14394"},{"Ccode":"21CSH-346","section":"21AML11/A","Teacher":"E9758"},{"Ccode":"21CSH-346","section":"21AML12/A","Teacher":"E16159"}]');
// for(let i of internal){
//     try{
    console.log(await prisma.iTeacher.findFirst({
        where:{
            Ccode: "21CSH-346",
            section: "21AML12/A"
        }
    }))
    //     await prisma.iTeacher.create({
    // data: 
    // {
    //     Ccode: "21CSH-346",
    //     section: "21AML6/A",
    //     Teacher: "E9758",
    //   }
    // })
// }
//     catch{
//         console.log(i)
//     }
// }
// await prisma.iTeacher.createMany({
//     data: internal
// })