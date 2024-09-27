"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const questions = [
  {
    question: "What color is the sun?",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEgQAAEDAgMEBQgHBgQFBQAAAAEAAgMEEQUSIQYxQVETImFxgRcyVZGTobHSFCNCUmLB0QcVM3Lh8CRTsvE0c4KiwhYlNZKU/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAQCAwUBBgf/xAA2EQACAgIBAgQDBwQCAQUAAAAAAQIDBBEhEjEFE0FRIjJhFHGBkaGxwSMzQvAG0SQ0Q1Lh8f/aAAwDAQACEQMRAD8A9xQAIAEACABAAgAQAIA5dR2BAxuslosMnqYAC+JocAdx1Cpuu8utz9i6irzbVBvWx2grY62kjqITdjxftHMFchfGyKnF8MjZVKuTjJcofzI8who5mK51ho42QOF2uBF7XCPMOtCsykrDmhQcpqYaKnE8X+jVtHRREGWeVua/2WX+JVVmTGFkK/WX7F9WO51zs9EW90zsXOroAgAQAIAEACABAAgAQAIAEACABAAgDhK5sBJcq3M7oSXKmVh1Ircf62EVQ5s/MJXInuqSfsMYvF0X9TN7PYgcPqeildamlPW/A7g78j/RYPhmb0S8qb4f6Gt4hj+ZHrj3Rscy3nYzD0NVVQ2mppZ3+bG0uPgFGVultkow6molTsrUOdSSQSG7435if5tT77+tK4OX51XU/cazauiaa9S7DtE4pieiPX1zKGmdO8nTRo+8eAXbMiNcXOXoTrqdklFGQw50lRj1LNKS+R82Zx5aH3BYOHkyvzlZL6/szcyK1VhyjH6fujehy9VGw87oWCrVLYaOqWzgLoAgAQAIAEACABAAgAQAIAEAJJUXLQCHO71RKZ3Q2Hgk2I0NjqqJTJaOFyoczpBxc3w2p/k/MKi6e4SX0ZdR/ciZERXGo1XjtnoXLk0OBVpfH9FmPXjHUJ4t/ovRYeWra9S7oxcqnoltdhW0EhFE2EG5meAe4dY/ADxRm3uFD+vH5nMSG7U/YgYO/wCj4gzXqyAs8eHwWf4Xf0zcPf8AgczF1Q37Gjz2bmJsBvutzzF3MnT7GWxSrdX1OcH6lmkY583eKxPEM3zZ+WuyNjDpVcd+rG8LbbF6O/8AmH/Q5R8Ml/5Kf0f7FmW/6Evw/dGzBXqozME66RrGlz3hrW6lx0sr42aOab4RykqGVMEU0Lw6ORoexw4gi4KvhNNbRxrT0+5IBVq5InV0AQAIAEACABAAgAQAIASSouWgEOclpzJpDbjzS0pnTN4tJPhuKippnWZOOu0+a4jf7uKy8zIsomrFyn3H8WuF1bhLuv2LOgxKGtHVOWUauiJ1tzHMKVeTG6PVEXtplU9M7iFjQVA08wrk5cM5XxNGeZHoO5eSlLk2uocaxzXNdGcsgN2u5Kyi+VUlJFVmpJpj1TUfTZ2utYRNyuHJx1Pwanc/IU4xUe3f+BfHh5e9jT4y1pc3zmnMPBIUW+XYpexfJ7WibiNX9IibBEdHtDpD2H7Pj/e9bObl+XDpj3f7CVFXxbfoQDHyWF1GkpC6Fn/uVJ/zD/octLwx/wBdfcynKl/SZoKmripIekndYHcBvceQC9G7lBdUnpGVGDm9RM3iFVUYtNHTO+rie8MEYdz4nnYXKz/ts8u6NVfEWaddMMeDm+Wa+INY0MaLNaLNHKy9FCfp6GO9ttseaUzCRFigVajh1dAEACABAAgAQAIAS/zSosDP4hjkuGVxgrqUugebwzRG9xyIPEfos3JzFRLVi+H0aHaMPz4bg/i9iZSYrRVf8GoaSfsu6pHgVWsiFq+GWyuePZW/iiSXFVSkQRW41B09E4t86I5x3Df7klkx82txXcvx7PLsTKNkZJa9uYOGoINiO1eZjbKt7T0zVnqS6X2J7q55pZYqnzshyvA0JtxHA+5atWZG1afDEHR0S3HsNxxksad2iw+ltjTlokMpyd6tjjyZW7B0Ut1esNkPNO/RTfzdLKf2J90cdo0KERMLWDK29/FQnizfc6rUIdA4JaVEolqsQwS+CaKRkectceqdN7SPzCYw7VRY5T9v5RyceuOhuYSTP6Wd2Z/A8AOQHALl2XO6W3+RZXGNa0iRgkGevMp82Jn/AHH+nxWp4TDmVn4f9lGZZ8KiaIFegjIzRRkaxuZ7g0c3GyahIjrbKut2lw+mzNY908g+zGNPXuULfEsenhy2/ZDVWBdZzrSJeC1VTWwGpqYGwNf/AA2A3OXmU5TZKyKlJa2L3Vxrn0xe9FkrioEACABAAgAQA28qiciSIGKUUdfTPglNidWutq13ApHIhG2LjMupslVJSiYl9M6GV0E7bSMNiLb+0LyN9c8exx/I9FC2NsOonUlVVQNAhnfl5O6zV2HiF0OJPYrZj1z9CzixVxGWpgJB0Lo9b94P6pmHiNUuJcCU8Vx5iyHAGkuDL5Q4hpIIuOG9Y+Ul5j6XtMaUnrkmx04J1AspVY8pdyqVmhrEMSpMMGSZxfMfNhjF3ePAeK04Y0YrcjldNt7+Bce/oUVTtBiNQ4inbHTsO62rvWV12wj8qNGHh1UeZvb/AEITjWVB+uqJn9pcVW8l+4wqqIdoo42CRp8+W/8AO5R+0Tf+R1+W/RfoTKaasgsYqmVvIF1x6iufapL12UTppl6FrS4vO2wq4Wyt+9Ho71blNZFU+JLQlPES5gyyidT1cfSQODgDrvuDyI4KNuLGS2hXcoS6ZDE0WTcsyylwGIz2dw+tp6alcQXSyPcXObGL92u73rex7acapKUuRWyuds+wmoxapeD0TGwA8T1iFGfi+uK1+ZbDCj/kyoqnyzkuqJXyD8Ruk7My+75pGhVVCv5UScDwoV9VnlH+GhPW00e7eG/BavhOH5svOsXw+n3lGdl+XHoj3NtHoANwXrYswBxSAEACABAAgDh3KEmA04pWciaGnHklJyOlRjNAKpgliaOnjvb8beX6LMy6Y3Q16jeNc6nr0KWIZhmG4815ixOL0zVciWxu5UPkqbJtPBryunsfH33FrJ8FVjONPE78Pwr+M02kmAuI+wdq11Wqlr1GMbEUl5t3y/v/APRFoMEvd8uYudqS7Uk96ksdz5YzZmKPEeEWH7tpYHsjkkibI7zWucAT4LksLa4Qo81+487C2DUBI2YuuxxZTGX0GXcElOuUSyN+yLLFDE9rZZGMc7zQ5wF+5VJzfZEncl6jgg7FHbDzDgYY5GzQuMcrRbMOI5HmOz/dX05E63w+CMkprTLWkqGVkZDhknYLOaNx7R2LScY3x66xKUXW+ew1PFYmyyr6nF7GIT2RJGXVEWXxY1FSPqqgQxHKT5zreaOa0sLGeRP6I5beq4bNZSQR0sLIYGBsbBYAf3z1XsqtRSiuy7GJKUpPql3JTSnYSK2OK5HAXQBAAgAQAhxVM2dQ043Sc2TQ046pObOobN+7wSk5IkU2IU3QyGpYLRu/it5Hn+vr5rIzqFZ8ce6Hce3jpkdpo7/ks6mrqe2W2T0RNp8VdhtNFS0ZtWVNww/5beLu/gP6Ldqgqo9ZPBx/tFnVL5Y9/wDoh4Bh7IYhpc8Sd5Ksqj1PbGMzI22gxl+PYnPJhezLo6KJnVqcUnGjXcWRN+04cTuG697hbNMIQW5c/QxLJykyswz9k9FDilPimK41iOIVsEgkBe4BuYG+7fa/arbMh9LikVdJ6C+McVjWxRfGRHkjabrLugmWxkZDbPYjD9qZaaWrnqIJacEMfA4CwJ43C5i+JW4HUoJNP3CdasKmgwPaPZV4dR1rsbw0efSzi0zBzYdxPYbJmWRhZ/E4dE/Rrs39URSsr7PaNVdk0DJodWSC7T/fFYtlUoSafoPQkmNh7mSNkiOWRmrT/fAqyi50yTXYnKHUtMuGSMqqcStG/ePuniFo5FcZwUo+oitwlpkGs+qaSe4LIVTdnShuMuCZh89BSRf8Qx0jtXuAOpXp8eVFMFFSX5r8xK1WWS3ok/vrDhoag+ET/wBE7DLoXea/NFf2a1+gqLHaB8zIY5nPe/RoEL/0TdGXTOXTCW2cni3RW5Lj8C3atKIqdUgBAAgAXGA08paxkkQq+jhrYDDUNzNvob6jtBSVvK0yyE3CSlHuZetwmahJd/Gg3B4Grewj+wsHKovhuVc2197NWnJrs4lFJjcMbTYi3eseWTev83+bL5Rj7EpkEbtC299DqVU8m6XDkylpeiLWmjbHGCbBrRv5ALSxKttCljMP0pxTGajEHXs92WMHgwaNHx9aayJ86Xoehrh9nx41+vd/eaqgOVgBNu1cqu0Y922wr8WlgIpaCA1NSRfICGtjH4ncO7eVqY0L8l6rel7vsIzcYdyunxDaSh/xFXTU01ODd7aaZzntHHQjrfFX2+F5C5rt216NcMjG6HaUdGmpKtlXSxzxuDmvbcEbisaV+1ytMm49LKXaDEamKaOkw+MSVMuoznK1jR9px5a+KMTEnnWOO9RXd/wiXXGpba22QG/+oKTK+WfD6w8YYrseO7MTc99lo3/8aqlX/Tk0/r2/TX8lccpt/FHgtqKqZVwCWIkcC0ixaRvBHAheStpnj2Om1coYTTW0OStBBNh6lOL2Ti9FXP1HXUZR0OQe0TMHly1BhJ6kwuB+IfqPgtLBn1RlU/vQrkw18SJdVGNR46pPKr0yNciveOAKTiNREU1FLXvLYeqwGzpHeb4cytXCwJ3fFLiJy3KjUvdmkw3D4KBpEIJc7z3u85398l6zFqroh0wRkXWzte5MsGLRg9lDFqw4CABAHCVF9gGnJSxkkNO4pKx6JDLrnhwsblKSe+xIqMQooYj00ckcBJ815s15/XuWZlY0LE5Ph+45TdNcPkZo/rGhwa9o5OFliKGrNMZkxzHpzS4DVPabOczI09+i3sddMOorxoeZkQi/czOFQhkTRyslLJGxkT29l417o4yWi7gNBzKXrUrbY1x7t6Mu16TZidoan944hX4RSbQUuGxUdO6aead2T6VMPOF7jQXtp6ivrGJVV4diQfTuTXH/AGeenOVtjinpIwWx+1mIU1cJRLJla4OkaXFzXMvroeSex7YZ8ZV2RW0tprgon1UyT6tp+575gAEWH5G6MbLIGDk3MbD1L5J41NU5s4J/7o2YPcUZ7a+sfh4qZ2TdA6eSGnNRlzdCw3u73let/wCH1xuo6mt8ybXvpdhXLm489jx7afFIcK2jliwnFDiVI0NLapji1xNrkZuNl6aPisurmC6fbQm8dpbjN7PVf2fY5Li0bhUP6SdoGaQCxlYR1XEc+BXl/wDmfhkFRDMpXH8P0/D9ORnw/Ick4y7rg2b/ADCvnlcjWj3Kur3pjuO1DMMvRubJc/VPD78gDr7rhWUT6Lov/eQuhuDRo6ppN77+xOZ0FyZ1TKqH6PLKRWSiFgNgx/Vzf9W7wVeDjUt9Unt+xbbOaXwo0MLWNY0MADAOqG7rL0UHpGe975H2ngnK2RHmngnYEGLVxwEACAEu3FQl2ArazFsPptJqmPN91puT6khfdXX80khirHts+WJT1G0zHdWlp3uP3pHZQfDesa7xOqPycj0PDbH870Q5MSrak9efI37sQy+/f6iFk3eI2y7cfuMxw6oem2EMbA4uA6x3k7z3neVm2Wym9yZJxS4ROpgM39Fyj5iiwj7W/wDxEbeBnbf3rfXFLJeH/wDqN/RlTRCzQs2yQ/a+S1heGuDiDYKfhtihm1yk9Lf8MzciLcGkeP8A7Utm6j95ieBpLHOe5jg0lrmk31PAi9jdfW9R8RphKmSbita2eXhG3Hun1RfTLkk/s22IZWwT1FfLPC9r2ZB0PVkANy25UZTXhkHJtNtPf0Lel3zi2tJdvqez0/RU8QjzAEb7a6r4tn2WZWTO7T02bNdbUUit2jw4YthVXSse0dOwDMdQ1zdWleq/4b4ksa50z+9fyhbLq6oNSPCdp/2f4nhlR0rIyYHm50JLTy03r3ksSN03Kqa19X2MmjMl1OmyD6l9OGes/s4opKPAYI6nC4KSRjcjZgy00zBrd/juCwP+S5eLDGljV2qT1rW98/Q0MWme+qUdGseerZfMYNp6NVdysrCnIsdqIjG52SN+80hck9NMsmadzulpYZCNXsaT4gLZzPcyK/mK2XQleefEuB6KIetO4upnvgO89GcoPeNx8U5RmXVfLIs8qE1qSJEOPVsFhKI5wPvDK71jT3LZo8ZmuJx/Iql4dCXyvRZ0m1FC85ahslO78YuPWFuY3imNPjevvE5+G3x7LZc01ZTVTc1PNHIPwuutWM4y5ixGUJQ4ktD4N1IiCAEu3KEuwFPV7P4ZOXP+jNje43LouqSe2yzcjGpt+eI5VmX1rSlwVM+zT4rmmqQ4cGyNt7x+ixr/AAqD/tvX3jsPEm/nRCkpKql/4inkDR9pgzg+r87LJu8Puh6b+4ZjlVT7Mdp3seLxva4btDeyzpxcXpoG9k6nPW1CKeJC8+w1tQ3PhDSPsytJW8uaWGC9ZC/EpaS9hpxWVYaNhdU0mW2XfyUY2JcJCFkdkssjkaA9gve+5XQyJVPrrbjL6cCrT7MaDGtqGQuNxa41tpyTGT43fk1dM+3r9SMaYxi5x7lkJY2tytaBbsXX4pjqCiolXQ3zsg4hMyJolIA7RxWe8jqsU6+GhimHX8IqCJhaHvN2nVrOATl/i+RkxULJcLvrjf3lXR0cRHJZ4owGvkDSd3allJS4i9Eowb5I1S4W0Sc1qWi6tFPUuumIGhXHQ23qwyuHBhPuUtdU0vdhY9Gokb0cLGbg1ob6gtXNkZMO5WTbyeawHzIdgyFIczzGy73/AHGDM71DVM049tvyR2XKyMe7HYsHrqg/wxAOcp19Q/Oy18fwi2fM3r9yqefVDhcllTbK05sayeSU8Ws6g/X3rbxvB8ePM9yFLPE7H8i0XNFhlHQ3NLTxxk7y0anvWzXVCtdMFpCFl07Xub2TArCsEAcKjLsA05KWIkhl3FJTRNDbrDXW/elJo7ogYgyjA6SqjaX7muA6/cCNfek7enXxdi6vrb1ArqYObK51yI3AZWONyPH/AHWBdZU57rWh7T1yTa6E1WGTwt1cWXb3jX8lr4slKPT7oojLosUvqZ+hAc0dtlkXcPRq2PfJYAOaDkOvNUxn0vYq0m+TjKiSEXqDdo3vHBWKEsiSjF8sjKEX8o7UxunDJKdw6Zm4X3jkhU2VPosRCuajxLsxt1dUtGV9LIHDfYXUPsvPDLFTX3UkNGKprXtM31UINzn49ytjV08RW2T666u3LJOIYlT4fSumfcNBDWHi9x3NaOJPJO4vgN9v9S99EFy9iK3KaiuW/wDeR2Fhyh89zKQM2t7HkseySUmq+3oW7547DdS5EOXyWVxKqYXKaiPRJFJF0ksMJGj3i4/CNT7h70ziw6719OfyFcieosvat2pud6uzLNiVUSqdlEwkkjMrNxjvbx7fFK4d9dcv6kd/77DEoSktJ6LzD5aaSACjY1jRvja0NLT3L1VEozinB7Rm2RlF6kTm9t+9P1/QrY8wJ2sgxauOAgAQALjQDTwlrESQy+w3pOaJJlPiWLx07jBT2lqBoRfqsPb29m/uWXl5EKOG+RujGnZy+EVAlfNIZZXl7zpc/kOC87ffO1/EzRVca1pEmM33JORCRY0sli260MS3WhayJUVMP0OvfHazHnPGeYJ1HgdPEKWdX8XWuzGqbOuv6oeBBasxrTDQ08Nc0teLtcLG/IqcW1yjuvUwuEbfMwerqMLx2lfVQU8r446iM/WNaHEC/PRfRaLI3VRdkU9pEcjAf9yp6b/I03lA2K6IPGIzNJ+wY33+Fl37DhP/ANtfkZ3l5C4KbFf2oYNC0twailq5fsvmGVo/Mq2MKKv7cEvwLq8S6z55aFbHw4jtFWs2ixx14o7/AEKn3MafvgfArzPj3iW08eD59f8AoclCvGh5dfr3Ny52ULySWymK2Qah+ZXxWhqtaI4bfdqrNljZZ4PFdz6k7rFkduI4n3W8Fq48fKpc33l+xnZE+p9KFVlRGzWR7Wg7rm11n3uU5ajyTrRXSVlON1TDu++FTGqa9GMR54I/0yNkokhqWMkbuc2QXTePZdQ+qHBY6ozWpIusN2lppC2KulijedBIHDIT28ivVYWfC/4ZLUjMyMGdfxRXBpYzdbcF7mc3yLVgAgAQAIAQ5UTR1ESrp/pEBhEssIP2onWd60nYiyEul7Ktuz1DG0NaZrDd1gPyWXPCo230/uN/bb/f9Dv7nogLZJTbj0zx+aWliUr/ABRz7Va/X9EV9ZDTNnbDTh4yEOkd0zzbjbU79yzc11VLpjFbYxS7Jrqkx6J1jvWVXNxlsslEfrYBXU4Ze0jTmjdyPHwK2Kpxsh0SF4t1S2inbKWlzJGlj2Gzg7gVn3Y8q5aZoLU11I7I/usFXFB0mKxbY6Crx19W8/UT2dl3AO4r1PheV11qlvTQ/TZX0fEttAzZLDg93+Hh6vEha3S/cZ8+CS+BfkiVRbI01RVNdLCxtKzUi3n9ixfEPEo0pwqe5Ebs+MK2opN/d2NtFlijayNoY1oADRuA5Lykm29swNNvnkTJIuJFsYkcq0tFU8DqqURsGg1kPBo/VO42P1vrl8qKbbehfUuJXNijbHF1WNFmgcFZlZHsKQhvlkCUm4cwlj2m7S02sUhTdKuzriMOCa0y4oasVcIeDZw0e3kV6yicbIqcezM62t1y0yW0X3hP1opaHGxMuCWN9SbgiI8xoaNO5NxXBxilI4CABAAgDjhooSQDTglJxJoaeEpOJJFXi9e2jiyM1nfoByHErPyrY0R6n3GaKXbL6FFEbDU67733nj715ayTnJyfqavSlwiWwjeqGitokxSlpF/Urareh8FE4bE11FHXND2u6KoaLNfvv2EcVpwshbHpkRrslS+OUZ6d09HKIatmR/2TvDu0Hiq7Mdx5XY1a5QtW4Mdgq4zGGTNzjhYrsHHXTM5OqW9xEGogzWipevzeVZZYun5m/wAWd8qevikSYZTbrnrcVnz5e0imUPYfM4todVT0EFASX3329al0new5T08tWfqupFxlO7/p59+7v3JyrF3qVnC/VlFl6jwu5atEVNCIoRZvabk95U78lJaj2F0nJ7ZFleXG+tlmTk5vZfFaI0jkRRfFDdPWOo6kTMGZu57R9ofqtTBynjz1LsyF1Csjr1NZTSMniZLE4OY8XaRyXsK0mk48mLJOL6WSWhOVxK2OK9HAXQBAAgAQAIAbcFROJ3ZCxCrioaV9RM6zW7hxceQSN7jXFyky6quVk+mJiZqp9VUPqJ3We7fyA4Adi8jk3Svm5HoqqFVHpRJpYp5/4ED39trD1qEMG2fp/BRZfXDhstIcLmIBmmDAfssFz60zHw6EfnYlPL38qGZo4oq17Is31bA0lziSXHU+7Kk89Rh01wWidLlKO5D0cpCz4zcSUoJjrzDUxGGojbLGd7XjMCnqsxoqcHF7jwVs+z8DyXUdRJCTrlf1h+vxTStqn3GIZtseJckV2C4gzzDFJ/K+1/Wh1QfaRes2p90wZhmI7ugaO+RqrdC/+SB5dJJiwmrOsj4Yxx1zFHkVrvIpllxfyomRYdTRgGYmdwO5+jR4frdHmVVr4VyLysnMkSTAjK33WS1mTKW9HI187Iz3k7yk9tvkvURNJTMqZpGdM9jyMzOI5EWK2MGirIrcJLlev0KrZyr0/QKnDKyO5YxszebDY+oq6fhDXNb/ADO15cf8uCqmc6JxbIxzHfdcLFJzx7Knqa0aEJxmtxZN2fxUUVSYJ3Wp5nb/ALj+fcePatvwjM6X5M+3oKZ2J1R8yPdGzZfivVRWjCHFMAQAIAEACABACX+aotbDZnMTwisxasz1FQ2GljNoo2DM483HkezgsvLxHe/il8Pt6j2NlRx4fAty9yVR4HQUurYukd9+Q5lVHDqp+SJGzKut7vgmloAAAsBuCjKJTsalLY2Oe/zWglx7EvKJ1Lb0Zhkpe5z3ec9xce8leWyZeZbKRtQr6YpDzBPPDJJDbo2AkyEaacAOJVmPgufxT4RROyMWkOMfoLHvSElrsT0ONktxXOqSIuIptR1i0OBeACRyvuPuPqVnVNR6vQg4CuncjzpHfLRwzHmouyTO9A26Qnio7ZJRQ2I21FTTxPBsXncbEHK7cn/DoRla4yW+P5RC1uMNo7WQz0nWkGeI7pLW/wDsOHwV2R4dKv4ocoKboz4fcjw1HQVkM1wQx1nfynQ/r4LmBZ5V632fBddV1VtGsaOWo4L1sI67GJ9GdkginblmjbIDwcLpmMN8MFJxe0U9bsvRztJgc+B/AA5m+pU2eE0WcpdL+g5V4ldDvyvqWOCxVtPB9HrZI5ej0jlaTdze0Hd71oURnGCjN7aFb5Vzl1VrWyyVxSCABAAgAQAIAEAILRyChJNgIcEtOBIbc1LSgSTKjaOcQYeWZrGY5PDikMxuuptd3wvxG8SHXZt9kQcNwiWdokrGlkf+XuL+/kOxZ+P4d0pTs7+wxk5a+WBaV7Q3DpmtADWxkAAbk3OPDEoczWyhZLoF5OUeTa6BzpHEgMGZx0A5lTppdklBFU9RW2SaukFHTwzGxcH2ld/NYfENHcVq5WKo4/TH0FKrXOzXuM9JyPasXpG+kDA9lKyszOMcly8E+YDuP99/NatuB/QUor4kv/0XV39RwGjIsrpHFEXQvviNLf8AzD/octPwxf1/wZRkx/pM0uS4IIuORXpIwMoosTwR1nSUDc7d7oHf+P6JPJ8LU/iq4l/v5DuPma+Gz8yy2eqDU4bGHuPSwnopMx1u3n3ix8VrYu51JyWn6/eK5UVG19PZ8otmhPwgLsXbmrkiJ1dAEACABAAgAQAIAEACAE2UJR2AhzQFRKB3ZEmo4Zp4p5WB7475LnRt+NkvOvZYptLSHrXN1TKHqcRBxcWw2p/k/NUWw+CT+jLqf7iMk2QceC8fo9A4F7gVGcn0yUauFouwfe8fgvQYWH5UNvuzHy7uqXSuxZVlOKmlkiPVL2EDsPA/mm5VKS6fcWhPpkpexlWudMGstlfIQ0DkSvNVY7d6r+ptSajDqNeIWiNsRALQLW5i1l6jo0Ye3vaMviNM+hqeiIvE7WI8xyPaFg5+J5VnUuzNfFtVkee6E4W7Ni9H/wAw/wChyPDF/wCSvx/Ysy1/48vw/dGyDV6qMDB2KDbblfGBzYpkTWEuawBzjdx5piMCLY4ArUtHDq6AIAEACABAAgAQAIAEACABAHCLrjWwElqqlA7sQWqlwO7K3aDqYPVO5M/MJa+GqpfcMY3N0V9TM4FQuxGq64P0eLWT8XJvj8F5/wANwvMl5kvlX6mxn5HlQ6Y92bMN03DwW+4GFs7ltqueWGzO09Dk2mkZY9E368eP9bpGOI1mOz6fr2H53L7Il670aLKn1D2M8iYnQNrqR0Luq7exw+yUW4yug4SLKrnVNSRkcN6SLHaSKZpbIyezgeBsQsLConTnKuS5W/2NvJlGzElOPbj90b4NXqowPPbFgK6MdHNilM4CABAAgAQAIAEACABAAgAQAIAEACABAHCLqLjsCux2llq8LqKenAMkjQG33DUJe+h2VyivUvx7FXbGb9BzDKCPD6JlNEDZu9x3uPElcrx41QUI+hy26Vs3ORJyrvllezuVc6A2I6JvSdIGjNbLm42XfLDYoM0XVWGxQapqBzZTYnhBmxKjr6cfWRSN6UbszefePgqbMSM7YWrvH9UM1ZLhVOp9n2LxNpCoLoAgAQAIAEACABAAgDl0AF0AF0AF0AF0AF0AF0AF0AF0AF0AFwuAGiNAGiADRABojQBddALoALoALoALoALoALoALoALoALoALoAxPlZ2I9ND2EnyoAPK1sR6aHsJPlQAeVnYn00P/zyfKgA8rWxHpoewk+VAB5WdiPTQ9hJ8qADytbEemh7CT5UAHla2I9ND2EnyoAPK1sR6aHsJPlQAeVrYj00PYSfKgA8rWxHpoewk+VAB5WtiPTQ9hJ8qADytbEemh7CT5UAHla2I9ND2EnyoAPK1sR6aHsJPlQAeVrYj00PYSfKgA8rWxHpoewk+VAB5WtiPTQ9hJ8qADytbEemh7CT5UAHla2I9ND2EnyoAPK1sR6aHsJPlQAeVrYj00PYSfKgA8rWxHpoewk+VAB5WtiPTQ9hJ8qADytbEemh7CT5UAHla2I9ND2EnyoAPKzsR6aHsJPlQB//2Q==",
    options: ["Yellow", "Blue", "Green", "Red"],
    correctAnswer: "Yellow",
  },
  {
    question: "What color is the sky?",
    image:
      "data:image/jpeg;base64,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",
    options: ["Green", "Blue", "Purple", "Orange"],
    correctAnswer: "Blue",
  },
  {
    question: "What color is grass?",
    image:
      "https://t3.ftcdn.net/jpg/01/99/08/08/360_F_199080856_ZFRgL8bvqHAtK2vUYH45nuzk6kq7hlL7.jpg",
    options: ["Red", "Yellow", "Brown", "Green"],
    correctAnswer: "Green",
  },
];

export default function ColorGuessingGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Game over logic here
      alert(`Game Over! Your score: ${score}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div
      className="h-full flex items-center justify-center w-full"
      style={{ backgroundColor: "#FFD72E" }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">
          Color Guessing Game
        </h1>
        <div className="text-center mb-6">
          <img
            src={questions[currentQuestion].image}
            alt="Question Image"
            className="w-48 h-48 mx-auto rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
        <p className="text-2xl font-semibold text-center mb-6 text-gray-700">
          {questions[currentQuestion].question}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              className={`py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200 ${
                showResult
                  ? option === questions[currentQuestion].correctAnswer
                    ? "bg-green-500 text-white"
                    : option === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-500"
                  : "bg-" +
                    option.toLowerCase() +
                    "-500 text-white hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  option === "Yellow" ? "#FFD72E" : option.toLowerCase(),
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="text-center mb-6">
            {selectedAnswer === questions[currentQuestion].correctAnswer ? (
              <p className="text-2xl font-bold text-green-500">
                Yay! You got it right! 🎉
              </p>
            ) : (
              <p className="text-2xl font-bold text-pink-500">
                Oops! Keep trying, you're doing great! 💖
              </p>
            )}
            <button
              onClick={nextQuestion}
              className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-600 active:bg-purple-700 transition-all duration-200 animate-bounce"
            >
              Next Question
            </button>
          </div>
        )}
        <p className="text-center text-xl font-semibold text-gray-600">
          Score: {score}/{questions.length}
        </p>
      </div>
    </div>
  );
}
